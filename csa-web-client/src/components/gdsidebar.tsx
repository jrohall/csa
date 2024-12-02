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
    <div className="flex">
      <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" defaultChecked/>
      <label htmlFor="drawer-toggle" className="absolute top-30 left-0 z-10 p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
          <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
          <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>

      </label>
      <div className="absolute z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSidebar;

/*
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
*/