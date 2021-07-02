import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import TextCards from '../components/sections/TextCards';
import Cta from '../components/sections/Cta';

const pdf_link = "zeyadShureihResume.pdf"

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <TextCards id="Experience" topDivider />
      <FeaturesSplit id="Research" invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTiles id="Classes" topDivider/>
    </>
  );
}

export default Home;