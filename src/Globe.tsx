import { useRef, useState, useEffect } from "react";
import Globe from 'react-globe.gl';
import points from "./points";

type wPoint = {
    name: string,
    lat: number,
    lng: number,
    size: number,
    color: string,
};

const World = () => {
    const globeEl : any = useRef();
    const [ worldPoints, setWorldPoints ] = useState<wPoint[]>([]);
    const ROTATION_SPEED = 500;

    useEffect(() => {
        setWorldPoints(points);
    }, [])

    return (
        <Globe 
        // Setup
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showAtmosphere={true} 
        height={937} 

        // Labels
        labelsData={worldPoints}
        labelLat={(d : any) => d.lat}
        labelLng={(d : any) => d.lng}
        labelText={(d : any) => d.name}
        labelSize={(d : any) => 0.5 + d.size}
        labelDotRadius={(d : any) => 0.5 + d.size}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
        onLabelClick={(d : any) => {
            const MAP_CENTER = {
                lat: d.lat,
                lng: d.lng,
                altitude: 1,
              };
            globeEl?.current?.pointOfView(MAP_CENTER, ROTATION_SPEED);
        }}/>
    )
}

export default World;