import React from 'react'

import Lottie from 'lottie-react';
import animationData from './assets/MwzauNRKet.json';


export const Animation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                animationData={defaultOptions.animationData}
                loop={defaultOptions.loop}
                autoplay={defaultOptions.autoplay}
                style={{ height: 400, width: 400 }}
            />
        </div>
    )
}

