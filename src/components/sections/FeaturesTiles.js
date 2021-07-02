import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SplitTile from '../elements/SplitTile'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Relevant Courses',
    paragraph: 'My most relevant classes from my time at Oregon State University'
  };

  const itemOne = {
    icon: "feature-tile-icon-01.svg",
    title: "Machine Learning and Data Mining",
    text: "Techniques in supervised and unsupervised machine learning. Clustering, Decision Trees, Regression, and Support Vector Machines"
  }
  
  const itemTwo = {
    icon: "feature-tile-icon-02.svg",
    title: "Deep Learning and Natural Language Processing",
    text: "Solutions to Natural Language Processing problems with LSTM, attention, encoders, and transformers in PyTorch"
  }

  const itemThree = {
    icon: "feature-tile-icon-04.svg",
    title: "Intelligent Agents and Decision Making",
    text: "Fundamentals of Reinforcement Learning. Policy and Value Function iteration, Q-learning, Deep Q-Networks, distributed RL methods"
  }

  const itemFour = {
    icon: "feature-tile-icon-04.svg",
    title: "Intelligent Robotics",
    text: "Probabilistic robotics, Robotics Operating System (ROS) for Python, and SLAM algorithms"
  }

  const itemFive = {
    icon: "feature-tile-icon-04.svg",
    title: "Artificial Intelligence",
    text: "Game-search algorithms, adversarial tree search, bayesian logistic regression"
  }

  const itemSix = {
    icon: "feature-tile-icon-06.svg",
    title: "Advanced Web Development",
    text: "Front-end development with React. Webhooks and API integration"
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            
            <SplitTile content={itemTwo}>
            </SplitTile>

            <SplitTile content={itemThree}>
            </SplitTile>
            
            <SplitTile content={itemOne}>
            </SplitTile>

            <SplitTile content={itemFour}>
            </SplitTile>

            <SplitTile content={itemFive}>
            </SplitTile>

            <SplitTile content={itemSix}>
            </SplitTile>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;