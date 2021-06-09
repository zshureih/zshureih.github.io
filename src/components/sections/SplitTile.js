import React from 'react';
import Image from '../elements/Image';
import classNames from 'classnames';


const SplitTile = ({
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
        <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                        <Image
                            src={require('./../../assets/images/' + props.content.icon)}
                            alt=""
                            width={64}
                            height={64} />
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                        {props.content.title}
                    </h4>
                    <p className="m-0 text-sm">
                        {props.content.text}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default SplitTile;
