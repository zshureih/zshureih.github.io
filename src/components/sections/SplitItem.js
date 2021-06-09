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
    return (
        <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    {props.content.title}
                  </div>
                <h3 className="mt-0 mb-12">
                    {props.content.name}
                  </h3>
                <p className="m-0">
                    {props.content.description}
                  </p>
            </div>
            <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                    src={require('./../../assets/images/' + props.content.image)}
                    alt=""
                    width={528}
                    height={396} />
            </div>
        </div>
    )
    
}

export default SplitItem;
