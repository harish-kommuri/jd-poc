import { makeStyles } from '@material-ui/core';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const useStyles = makeStyles({
    mapContainer: {
        height: "640px",
        width: "640px",
        margin: "120px auto",
        maxWidth: "100%",
        maxHeight: "calc(100% - 240px)"
    }
});

export default function LeafletMap() {
    const classes = useStyles();

    return (
        <MapContainer className={classes.mapContainer} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}