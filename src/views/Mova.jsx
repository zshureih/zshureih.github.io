import React, { useEffect, useRef, useState } from 'react';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import SectionHeader from '../components/sections/partials/SectionHeader';

const API_BASE = import.meta.env.VITE_MOVA_API_URL;

const DEFAULTS = {
  artist: '',
  song_title: '',
  prompt: 'in focus, high res, artistic shots from a music video',
  audio_strength: 1.0,
  alpha: 0.5,
  noise_level: 0.0,
  ddim_sampling_steps: 50,
  ddim_eta: 0.0,
  interpolation_steps: 1,
  height: 512,
  width: 512,
  seed: 316199,
};

const sectionHeader = {
  title: 'MOVA',
  paragraph: "Generate a music video for (almost) any song, using latent diffusion and ImageBind to turn lyrics and audio into visuals. Submit a request below and it'll join a queue processed on my home GPU server — the model isn't wired up to the queue yet, so for now this just proves the pipeline works end-to-end."
};

const Mova = () => {
  const [form, setForm] = useState(DEFAULTS);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [job, setJob] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const pollRef = useRef(null);

  useEffect(() => () => clearInterval(pollRef.current), []);

  const updateField = (field, isNumber) => (e) => {
    const value = isNumber ? Number(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const pollStatus = (id) => {
    clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE}/video/${id}`);
        if (!res.ok) return;
        const data = await res.json();
        setJob(data);
        if (data.status === 'completed' || data.status === 'failed') {
          clearInterval(pollRef.current);
        }
      } catch {
        // transient network hiccup - keep polling
      }
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!API_BASE) {
      setErrorMessage("The MOVA queue isn't configured yet - check back soon.");
      return;
    }
    if (!form.artist.trim() || !form.song_title.trim()) {
      setErrorMessage('Artist and song title are required.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.status === 429) {
        setErrorMessage("You've hit the submission limit for now - try again later.");
        return;
      }
      if (res.status === 503) {
        setErrorMessage('The queue is full right now - try again in a bit.');
        return;
      }
      if (res.status === 422) {
        setErrorMessage('One of the fields is invalid - double check your inputs.');
        return;
      }
      if (!res.ok) {
        setErrorMessage('Something went wrong submitting your request.');
        return;
      }

      const data = await res.json();
      setJob({ id: data.id, status: data.status });
      pollStatus(data.id);
    } catch {
      setErrorMessage('Could not reach the MOVA queue - it may be offline right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mova section center-content">
      <div className="container-sm">
        <div className="mova-inner section-inner">
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className="container-xs">
            <form onSubmit={handleSubmit}>
              <Input
                label="Artist"
                name="artist"
                value={form.artist}
                onChange={updateField('artist')}
                placeholder="Paramore"
                formGroup="desktop"
              />
              <Input
                label="Song title"
                name="song_title"
                value={form.song_title}
                onChange={updateField('song_title')}
                placeholder="Misery Business"
                formGroup="desktop"
              />
              <Input
                label="Style prompt"
                name="prompt"
                type="textarea"
                value={form.prompt}
                onChange={updateField('prompt')}
                hint="Describes the visual style of the generated video"
                formGroup="desktop"
              />

              <Button
                type="button"
                color="dark"
                size="sm"
                onClick={() => setShowAdvanced((v) => !v)}
              >
                {showAdvanced ? 'Hide advanced settings' : 'Show advanced settings'}
              </Button>

              {showAdvanced &&
                <div className="mt-16">
                  <Input label="Audio strength" name="audio_strength" type="number" step="0.05" min="0" max="1"
                    value={form.audio_strength} onChange={updateField('audio_strength', true)} formGroup="desktop" />
                  <Input label="Alpha (mix rate)" name="alpha" type="number" step="0.05" min="0" max="1"
                    value={form.alpha} onChange={updateField('alpha', true)} formGroup="desktop" />
                  <Input label="Noise level" name="noise_level" type="number" step="0.05" min="0" max="1"
                    value={form.noise_level} onChange={updateField('noise_level', true)} formGroup="desktop" />
                  <Input label="DDIM sampling steps" name="ddim_sampling_steps" type="number" step="1" min="1" max="150"
                    value={form.ddim_sampling_steps} onChange={updateField('ddim_sampling_steps', true)} formGroup="desktop" />
                  <Input label="DDIM eta" name="ddim_eta" type="number" step="0.05" min="0" max="1"
                    value={form.ddim_eta} onChange={updateField('ddim_eta', true)} formGroup="desktop" />
                  <Input label="Interpolation steps" name="interpolation_steps" type="number" step="1" min="1" max="10"
                    value={form.interpolation_steps} onChange={updateField('interpolation_steps', true)} formGroup="desktop" />
                  <Input label="Height (px)" name="height" type="number" step="64" min="64" max="1024"
                    value={form.height} onChange={updateField('height', true)} formGroup="desktop" />
                  <Input label="Width (px)" name="width" type="number" step="64" min="64" max="1024"
                    value={form.width} onChange={updateField('width', true)} formGroup="desktop" />
                  <Input label="Seed" name="seed" type="number" step="1" min="0"
                    value={form.seed} onChange={updateField('seed', true)} formGroup="desktop" />
                </div>
              }

              {errorMessage &&
                <p className="text-color-error mt-16">{errorMessage}</p>
              }

              <div className="mt-16">
                <Button type="submit" color="primary" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Generate video'}
                </Button>
              </div>
            </form>

            {job &&
              <div className="mova-status mt-32">
                <p className="m-0">Job <code>{job.id}</code>: <strong>{job.status}</strong></p>
                {job.status === 'completed' &&
                  (job.result
                    ? <p className="m-0"><a href={job.result}>Download your video</a></p>
                    : <p className="m-0 text-xs text-color-low">{job.note}</p>)
                }
                {job.status === 'failed' &&
                  <p className="m-0 text-color-error">{job.error}</p>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mova;
