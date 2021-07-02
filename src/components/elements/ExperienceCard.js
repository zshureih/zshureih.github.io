import React from 'react';
import Image from './Image';
import classNames from 'classnames';


const ExperienceCard = ({
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
    github,
    ...props
}) => {
    console.log(props)
    return (
        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">
                <div className="testimonial-item-footer text-xs mt-16 mb-0">
                    <span className="testimonial-item-name text-color-high">{props.content.role}</span>
                    <br></br>
                    <span className="testimonial-item-link">
                        <span className="testimonial-item-name text-color-low">{props.content.year}</span>
                        <p>{props.content.company}</p>
                    </span>
                </div>
                <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                        {props.content.text}
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
                    <span className="testimonial-item-link">
                        <span className="testimonial-item-name text-color-primary">Keywords/Technologies:</span>
                        <p className="text-color-low">{props.content.keywords}</p>
                    </span>
                </div>
            </div>
        </div>
    )

}

export default ExperienceCard;
