import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Zeyad <span className="text-color-primary">Shureih</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Master's Student in Computer Science at Oregon State University. Graduating in Spring 2022 with a focus on <span className="text-color-primary">Computer Vision</span>, 
                <span className="text-color-primary"> Interactive Robotics</span>, and <span className="text-color-primary">Deep Learning</span>.
                <br></br>
                Seeking full time employment beginning in June 2022.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://www.linkedin.com/in/zeyad-shureih-122541122/?lipi=urn%3Ali%3Apage%3Aprofile_view_index_index%3BVDcyu%2FVeSBe6MLPIEukoQw%3D%3D">
                    View on LinkedIn
                  </Button>
                  <Button tag="a" color="high" wideMobile href="https://github.com/zshureih/">
                    View on Github
                  </Button>
                  <Button tag="a" color="primary" wideMobile href="../../assets/documents/zeyadShureihResume.pdf" download>
                    View Resume
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;