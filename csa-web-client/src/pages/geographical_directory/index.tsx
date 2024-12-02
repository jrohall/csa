"use client"

import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Navbar from '@/components/navbar';
import LocationSidebar from '@/components/gdsidebar';

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const [GMAPS_API, setApiKey] = useState('');
    const [locations, setLocations] = useState<any[]>([]);


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
    console.log("LOCATIONS: ", locations);
    

    // init the map only once the GMAPS_API state is updated
    useEffect(() => {
        if (GMAPS_API) {  // only run if the API key is available (please)
            const initMap = async () => {
                const loader = new Loader({
                    apiKey: GMAPS_API,
                    version: "weekly",
                });
                const { Map } = await loader.importLibrary("maps");
                const { AdvancedMarkerElement, PinElement } = await loader.importLibrary("marker");
                const infoWindow = new google.maps.InfoWindow();
                const {ColorScheme} = await loader.importLibrary("core")

                const mapOptions: google.maps.MapOptions = {
                    center: { lat: 32.7767, lng: -96.7970 },
                    zoom: 13,
                    mapId: "d454226efaad80dd", // create a custom map via google cloud
                    //colorScheme: ColorScheme.FOLLOW_SYSTEM
                };

                const map = new Map(mapRef.current as HTMLElement, mapOptions);

                map.setOptions({
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                });
                

                console.log("LOCATIONS CHECK: ", locations);
                locations.forEach((location) => {
                    const procCoords = {
                        lat: location.address.location.latitude,
                        lng: location.address.location.longitude,
                    };
                    console.log("PROCESSING LOCATION: ", location);

                    const pinContent = new PinElement({
                        background: 'Black',
                        borderColor: 'Black',
                        glyphColor: 'White',
                    });

                    const marker = new AdvancedMarkerElement({
                        map,
                        position: procCoords,
                        content: pinContent.element,
                        title: location.name,
                        gmpClickable: true,
                    });

                    marker.addListener('click', ({ domEvent }: any) => {
                        const { target } = domEvent;
                        infoWindow.close();
                        const contentDiv = document.createElement('div');
                        contentDiv.style.color = 'black';
                        contentDiv.innerText = marker.title;
                        infoWindow.setContent(contentDiv);
                        infoWindow.open(marker.map, marker);
                        map.panTo(marker.position as google.maps.LatLng);
                    });
                });

            };

            initMap();
        }
    }, [GMAPS_API]); 

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="">
                    <LocationSidebar locations={locations} />
                    <div className='w-full h-screen' ref={mapRef} />
                </div>
            </div>
        </div>
    );
}

