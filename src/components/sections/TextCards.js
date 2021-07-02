import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ExperienceCard from '../elements/ExperienceCard';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const TextCards = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Work Experience',
    paragraph: 'Over the past 3 years, I have been able to gain experience in software engineering and artificial intelligence predominantly through research'
  };

  const experienceOne = {
    text: "Developed intelligent agents to solve complicated computer vision, physical reasoning, and interactive robotics problems to be presented to \
    and evaluated by DARPA scientists. Delivered a top scoring physical hypothesis generator that recreates observed objects \
    in a physics engine to predict object dynamics.",
    role: "Gratuate Research Assistant: AI Software Engineer",
    year: "2021 - Present",
    company: "Oregon State University Machine Common Sense Lab",
    keywords: "PyBullet, OpenCV, Tensorflow, Linux"
  }

  const experienceTwo = {
    text: "Designed and developed interfaces to communicate Q-learning based decision tree models, trained to play StarCraft2, to user-study participants. \
    Migrated offline application to Google Cloud Service hosted web-application. \
    Implemented and tested a user-state logging sytem in Javascript to allow research participants to recover their progress in case of network malfunction.",
    role: "Explainable AI Research Assistant",
    year: "2020 - 2021",
    company: "Oregon State University Explainable AI Lab",
    keywords: "Google Cloud Services, Node.js, Javascript, jquery"
  }

  const experienceThree = {
    text: "Developed a full-stack web application, designed microservice APIs, and managed both application and database deployment for the Oregon State Construction Contractor's Board. Migrated existing paper methods for certification approval to newly developed web-platform.",
    role: "Junior Full-Stack Developer",
    year: "2019 - 2020",
    company: "Center for Applied Systems and Software",
    keywords: "Microsoft .Net Core, Microsoft SQL Server, Microsoft IIS, C#, Github, DevOps"
  }

  const experienceFour = {
    text: "Utilized existing computer vision techniques to segment robot generated environment maps to allow for multi-agent responses to natural disasters. Used ROS to navigate and map physical environments with Pioneer robots.",
    role: "Robotics Research Assistant",
    year: "2018 - 2019",
    company: "Collaborative Robotics and Intelligent Systems Institute",
    keywords: "Python, ROS, OpenCV, Linux"
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

            <ExperienceCard content={experienceOne} github={true}>
            </ExperienceCard>

            <ExperienceCard content={experienceTwo}>
            </ExperienceCard>

            <ExperienceCard content={experienceThree}>
            </ExperienceCard>

            <ExperienceCard content={experienceFour}>
            </ExperienceCard>

          </div>
        </div>
      </div>
    </section>
  );
}

TextCards.propTypes = propTypes;
TextCards.defaultProps = defaultProps;

export default TextCards;