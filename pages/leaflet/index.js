import React from 'react';

import dynamic from 'next/dynamic';

import "leaflet/dist/leaflet.css";

const MapComponent = dynamic(() => import('./../../components/leaflet/LeafletMap'), {
    ssr: false
});

export default function LeafletPage() {
    return (
        <MapComponent />
    );
}