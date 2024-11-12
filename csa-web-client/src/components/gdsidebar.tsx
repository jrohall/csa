// components/LocationSidebar.tsx
import React from 'react';

interface Location {
  name: string;
  address: {
    formatted: string;
  };
  description: string;
}

interface LocationSidebarProps {
  locations: Location[];
}

const LocationSidebar: React.FC<LocationSidebarProps> = ({ locations }) => {
  return (
    <div className="location-sidebar">
      <h2>Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <h3>{location.name}</h3>
            <p>{location.address.formatted}</p>
            <p>{location.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSidebar;