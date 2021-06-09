import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ExperienceCard from './ExperienceCard';

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
    paragraph: 'Over the past 3 years, I have been able to gain experience developing client and user facing code with various organizations.'
  };

  const experienceOne = {
    text: "Developed intelligent agents to solve complicated computer vision, physical reasoning, and interactive robotics problems to be presented to and evaluated by DARPA scientists. Delivered a top scoring physical hypothesis generator that recreates observed objects in a physics engine to predict object dynamics.",
    role: "GRA: AI Engineer",
    year: "2021 - Present",
    company: "Oregon State University Machine Common Sense Lab"
  }

  const experienceTwo = {
    text: "Designed and developed interfaces to communicate Q-learning based decision tree models, trained to play StarCraft2, to user-study participants. \
    Migrated offline application to Google Cloud Service hosted web-application. \
    Implemented and tested a user-state logging sytem in Javascript to allow research participants to recover their progress in case of network malfunction.",
    role: "Explainable AI Research Assistant",
    year: "2020 - 2021",
    company: "Oregon State University Explainable AI Lab"
  }

  const experienceThree = {
    text: "Developed a full-stack web application and database management systems for the Oregon State Construction Contractor's Board. Migrated existing paper methods for certification approval newly developed web-platform. Developed and hosted applications with C#, Microsoft SQL Server, and Microsoft IIS",
    role: "Junior Full-Stack Developer",
    year: "2019 - 2020",
    company: "Center for Applied Systems and Software"
  }

  const experienceFour = {
    text: "Utilized existing computer vision techniques to segment robot generated environment maps to allow for multi-agent responses to natural disasters. Developed SLAM algorithms to simultaneously generate and segment real-world maps.",
    role: "Robotics Research Assistant",
    year: "2019 - 2019",
    company: "Collaborative Robotics and Intelligent Systems Institute"
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

            <ExperienceCard content={experienceOne}>
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