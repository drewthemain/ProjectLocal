import React from "react";
import Globe from 'react-globe.gl';

const World = () => {

    return (
        <Globe globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" showAtmosphere={true} height={937} />
    )
}

export default World;