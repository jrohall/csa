"use client"

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Navbar from '@/components/navbar';

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const [GMAPS_API, setApiKey] = useState('');
    const [locations, setLocations] = useState([]);
    const CONFIGURATION = {
        "locations": [
          {"title":"5931 Greenville Ave","address1":"5931 Greenville Ave","address2":"Dallas, TX 75206, USA","coords":{"lat":32.857958380150926,"lng":-96.7689238932541},"placeId":"Eio1OTMxIEdyZWVudmlsbGUgQXZlLCBEYWxsYXMsIFRYIDc1MjA2LCBVU0EiMRIvChQKEgnJ7zTcmJ9OhhEMr2VZikAovRCrLioUChIJKRprMI-fToYRFqRKGb3CCHY"},
          {"title":"7777 Forest Ln","address1":"7777 Forest Ln","address2":"Dallas, TX 75230, USA","coords":{"lat":32.91153776754813,"lng":-96.77404679140169},"placeId":"ChIJH2yr7RghTIYRlib-UoXJels"}
        ],
        "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
        "mapsApiKey": "AIzaSyBeFVfs0qfgTKEvmhNpfoANZnYPMjaEpxM",
        "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false,"actions":false}
      };

    useEffect(() => {
        // grabbing the api key
        fetch(`http://localhost:4004/api/get-api-key`)
            .then((response) => response.json())
            .then((data) => {
                setApiKey(data.apiKey);
            })
            .catch((error) => {
                console.error("Error fetching the API key:", error);
            });
            
        // grabbing the locations from the database
        fetch('http://localhost:4004/api/loc', {method: 'GET',})
            .then((response) => response.json())
            .then((data) => {
                setLocations(data);
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

                // configure the locator when the map is initialized
                const locator = document.querySelector('gmpx-store-locator') as any;
                if (locator) {
                    locator.configureFromQuickBuilder(CONFIGURATION);
                }
            };

            initMap();
        }
    }, [GMAPS_API]); 

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div style={{ height: "100vh", width: "100vw" }} ref={mapRef} />
            </div>
          <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>
        </div>
    );
}

