"use client"

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Navbar from '@/components/navbar';

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const [GMAPS_API, setApiKey] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4004/api/get-api-key`)
            .then((response) => response.json())
            .then((data) => {
                setApiKey(data.apiKey);
            })
            .catch((error) => {
                console.error("Error fetching the API key:", error);
            });
    }, []);

    // init the map only once the GMAPS_API state is updated
    useEffect(() => {
        if (GMAPS_API) {  // only run if the API key is available (please)
            const initMap = async () => {
                const loader = new Loader({
                    apiKey: GMAPS_API,
                    version: "weekly",
                });
                const { Map } = await loader.importLibrary("maps");

                const mapOptions: google.maps.MapOptions = {
                    center: { lat: 32.7767, lng: -96.7970 },
                    zoom: 13,
                    mapId: "d454226efaad80dd",
                };

                const map = new Map(mapRef.current as HTMLElement, mapOptions);

                map.setOptions({
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                });
            };

            initMap();
        }
    }, [GMAPS_API]); 

    return (
        <div>
            <Navbar></Navbar>
            <div style={{ height: "100vh", width: "100vw" }} ref={mapRef} />
        </div>
    );
}
