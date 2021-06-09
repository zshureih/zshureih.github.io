import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SplitItem from '../sections/SplitItem'

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
    paragraph: 'In my time at Oregon State University I have been lucky enough to work in quite a few different research groups. Scroll to read about my contributions to various publications.'
  };

  const itemOne = {
    title: "VIVA: Intefaces for Video Searching and Browsing",
    titleLink: "",
    name: "Undergraduate Deep Learning Research Assistant",
    description: "Trained various image classification and object detection models to support user exploration of video-data. Integrated said models into a Flask server so that through user input, pretrained models could be fine-tuned to cater to specific datasets",
    image: "viva.png"
  }

  const itemTwo = {
    title: "VIVA: Intefaces for Video Searching and Browsing",
    name: "Undergraduate Deep Learning Research Assistant",
    description: "Trained various image classification and object detection models to support user exploration of video-data. Integrated said models into a Flask server so that through user input, pretrained models could be fine-tuned to cater to specific datasets",
    image: "features-split-image-03.png"
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

            <SplitItem content={itemOne}>
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