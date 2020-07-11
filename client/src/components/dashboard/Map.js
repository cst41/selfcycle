 /* global google */
import React, {useState, Fragment, useEffect} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, DirectionsRenderer} from 'react-google-maps';
import {connect} from 'react-redux';
import { getPoints } from '../../actions/points';

const Map = ({points, getPoints}) => {
    const [recycler, setRecycler] = useState(null);
    const [wastebin, setWastebin] = useState(null);
    const [directions, setDirections] = useState(null);
    const [view, setView] = useState(false);

    const renderDirection = () => {
        const directionsService = new google.maps.DirectionsService();

        const origin = {lat:3.002579, lng: 101.449733};
        const destination = {lat:3.003267, lng: 101.445305};

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if(status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    useEffect(() => {
        getPoints();
        renderDirection();
        //eslint-disable-next-line
    });

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
                setView(!view);
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
                                <th style={tableStyling}>Waste Bin</th>
                                <th style={tableStyling}>Fullness</th>
                                <th style={tableStyling}>Weight</th>
                            </tr>
                            <tr>
                                <td style={tableStyling}>Paper</td>
                                <td style={tableStyling}>{points.paper.full}</td>
                                <td style={tableStyling}>{points.paper.weight}</td>
                            </tr>
                            <tr>
                                <td style={tableStyling}>Metal</td>
                                <td style={tableStyling}>{points.metal.full}</td>
                                <td style={tableStyling}>{points.metal.weight}</td>
                            </tr>
                        </table>
                    </div>
                </InfoWindow>
            )}

            {view && (<DirectionsRenderer directions={directions} options={{preserveViewport: true, suppressMarkers: true}}/>)}
        </GoogleMap>
    );
}

const tableStyling = {
    border: '1px solid black',
    margin: '2px'
}

const mapStateToProps = (state) => {
    return({
        points: state.points
    });
};

const WrappedMap = withScriptjs(withGoogleMap(connect(mapStateToProps, {getPoints})(Map)));

const App = () => {
    return <div style={{width: '100%', height: '80vh'}}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCE4GBjQ6pAiPbaCBqlth0cM1em0FE1T-U`}
        loadingElement={<div style={{height: '80vh'}} />}
        containerElement={<div style={{height: '80vh'}} />}
        mapElement={<div style={{height: '80vh'}} />} />
    </div>
};

export default App;