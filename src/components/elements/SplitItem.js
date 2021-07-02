import React from 'react';
import Image from '../elements/Image';
import classNames from 'classnames';


const SplitItem = ({
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
    console.log(props)
    const images = props.content.image.map((image) => 
        <div key={image}>
            <Image
                src={require('./../../assets/images/' + image)}
                alt="image"
                width={528}
                height={396} />
            <br></br>
        </div>
    )
    
    return (
        <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    {props.content.title}
                  </div>
                <h3 className="mt-0 mb-12">
                    <a href={props.content.titleLink}>{props.content.name}</a>
                </h3>
                <p className="m-0 text-xxs text-color-primary">Faculty Advisors: <span className="text-color-high">{props.content.faculty}</span></p>
                <br></br>
                <p className="m-0">
                    {props.content.description}
                </p>
                <br></br>
                <p className="m-0 text-xxs text-color-high">
                    <span className="text-color-primary">Keywords: </span>
                    {props.content.keywords}
                </p>
            </div>
            <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                {images}
            </div>
        </div>
    )
    
}

export default SplitItem;
