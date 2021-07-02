import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SplitItem from '../elements/SplitItem'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Research Projects',
    paragraph: 'In my time at Oregon State University I have been lucky enough to work in quite a few different research groups. Scroll to read about my contributions to various publications, and some passion projects.'
  };

  const itemOne = {
    title: "Oregon State University Senior Capstone",
    titleLink: "https://events.engineering.oregonstate.edu/expo2021/project/interfaces-video-search-and-browsing",
    name: "VIVA: Interfaces for Searching and Browsing Video",
    description: "Trained various image classification and object detection models to support user exploration of video-data. Integrated said models into a Flask server so that through user input, pretrained models could be fine-tuned to cater to specific datasets.",
    image: ["viva.png"],
    faculty: "Dr. Minsuk Kahng",
    keywords: "Deep Learning, Computer Vision, HCI, Tensorflow/Keras"
  }

  const itemTwo = {
    title: "Honors Thesis - DARPA Machine Common Sense Evaluation Team",
    titleLink: "https://ir.library.oregonstate.edu/concern/honors_college_theses/xd07h140g",
    name: "Solving Physical Reasoning Problems in Simulated Environments",
    description: "Integrated PyBullet, a low-resource physics SDK, with an object detection model, allowing it the ability to form it's own hypothesis about how the world around it will change. The agent was evaluated by the DARPA Machine Common Sense research team and performed best out of 3 competing agents. Further research includes object tracking, physical reconstruction, and interactive tasks.",
    image: ["thesis_poster.png"],
    faculty: "Dr. Alan Fern, Dr. Fuxin Li",
    keywords: "Computer Vision, Graphical Reconstruction, Physical Reasoning"
  }

  const itemThree = {
    title: "Undergraduate Research - Intefaces for Explainable AI",
    name: "Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations",
    titleLink: "https://conf.researchr.org/details/chase-2021/chase-2021-papers/5/Doing-COVID-era-Controlled-Studies-with-Humans-Tales-from-the-Trenches",
    description: "Collaborated with faculty and doctoral candidates to design an interface capable of communicating planning-based reinforcement learning to an average person with explanations in the form of a decision tree. Made design decisions partially influenced by information extracted through automated analysis of agent decision trees. In response to the COVID-19 global pandemic, the existing desktop application written for Electron was migrated to a Google Cloud Services hosted Node.js application. This enabled us to conduct a remote user interface study with participants all over the world, collecting session data for quantitative analysis. Study results have been published in two papers, with another on the way. All research was funded and evaluated by DARPA.",
    image: ["xai.png", "lam_xai.png"],
    faculty: "Dr. Minsuk Kahng, Dr. Alan Fern, Dr. Margaret Burnett",
    keywords: "UI Design, User Session Logging, Node.js, Google Cloud Services, Electron"
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {/* thesis */}
            <SplitItem content={itemTwo}>
            </SplitItem>

            {/* capstone */}
            <SplitItem content={itemOne}>
            </SplitItem>

            {/* xai */}
            <SplitItem content={itemThree}>
            </SplitItem>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;