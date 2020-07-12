import { GET_POINTS, UPDATE_POINTS } from './types';
import axios from 'axios';

export const getPoints = () => async dispatch => {
    try {
        const res = await axios.get("api/points");

        let paperPoints = res.data.data[0].weight * 0.25;
        paperPoints = Math.round(paperPoints);

        let metalPoints = res.data.data[1].weight * 1;
        metalPoints = Math.round(metalPoints);

        if(paperPoints < 0) {
            paperPoints = 0;
        }

        if(metalPoints < 0) {
            metalPoints = 0;
        }

        let paperWeight, metalWeight;
        if(res.data.data[0].weight > 1000) {
            paperWeight = (res.data.data[0].weight/1000.0) + "Kg";
        } else if(res.data.data[0].weight < 0) {
            paperWeight = "0g";
        } else {
            paperWeight = res.data.data[0].weight + "g";
        }

        if(res.data.data[1].weight > 1000) {
            metalWeight = (res.data.data[1].weight/1000.0) + "Kg";
        } else if(res.data.data[1].weight <0) {
            metalWeight = "0g";
        } else {
            metalWeight = res.data.data[1].weight + "g";
        }

        const totalPoints = paperPoints + metalPoints;

        dispatch({
            type: GET_POINTS,
            payload: {
                paper: {
                    weight: paperWeight, 
                    full: res.data.data[0].full, 
                    points: paperPoints
                },
                metal: {
                    weight: metalWeight,
                    full: res.data.data[1].full,
                    points: metalPoints
                },
                total: totalPoints,
                points: res.data.points
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const updatePoints = (total) => async dispatch => {
    try {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post("api/points", {total: total}, config);

        dispatch({
            type: UPDATE_POINTS
        });
    } catch (err) {
        console.log(err);
    }
}