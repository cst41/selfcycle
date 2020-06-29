import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';

const Map = () => {
    const [recycler, setRecycler] = useState(null);
    const [wastebin, setWastebin] = useState(null);

    return (
        <GoogleMap 
        defaultZoom={17} 
        defaultCenter={{lat:3.003529, lng: 101.445766}} >
            <Marker 
            position={{lat:3.002579, lng: 101.449733}}
            icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
            onClick={() => {
                setRecycler({coord: {lat:3.002579, lng: 101.449733}, name: "Recycler"});
            }} />

            <Marker
            position={{lat:3.003267, lng: 101.445305}} 
            onClick={() => {
                setWastebin({coord: {lat:3.003267, lng: 101.445305}, name: "Wastebin"});
            }}/>

            {recycler && (
                <InfoWindow position={{lat:recycler.coord.lat, lng: recycler.coord.lng}} onCloseClick={() => {
                    setRecycler(null);
                }}>
                    <div>
                        <h1>Volunteer Recycler Mr. John Current Location</h1>
                        <span>Lebuh Gambus Taman Klang Jaya 41200 Selangor</span>
                    </div>
                </InfoWindow>
            )}

            {wastebin && (
                <InfoWindow position={{lat: wastebin.coord.lat, lng: wastebin.coord.lng}} onCloseClick={() =>{
                    setWastebin(null);
                }}>
                    <div>
                        <h1>Recyclable Waste Bin</h1>
                        <h2>Address: No 17, Jalan Gamus 10 Taman Desawan 41200 Klang Selangor</h2>
                        <h3>Recyclable Content:</h3>
                        <table style={{borderCollapse: 'collapse', border: '1px solid black'}}>
                            <tr>
                                <th style={{border: '1px solid black'}}>Waste Bin</th>
                                <th style={{border: '1px solid black'}}>Fullness</th>
                                <th style={{border: '1px solid black'}}>Weight</th>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid black'}}>Paper</td>
                                <td style={{border: '1px solid black'}}>Empty</td>
                                <td style={{border: '1px solid black'}}>0g</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid black'}}>Metal</td>
                                <td style={{border: '1px solid black'}}>25% Full</td>
                                <td style={{border: '1px solid black'}}>0.24g</td>
                            </tr>
                        </table>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
    return <div style={{width: '100%', height: '80vh'}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAZJS-f33AxHFaKOXqFDcP8vb_c7_Womfk`}
        loadingElement={<div style={{height: '80vh'}} />}
        containerElement={<div style={{height: '80vh'}} />}
        mapElement={<div style={{height: '80vh'}} />} />
    </div>
}