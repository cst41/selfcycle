import { GET_POINTS } from './types';
import axios from 'axios';

export const getPoints = () => async dispatch => {
    try {
        const res = await axios.get("api/points");

        let paperPoints = res.data[0].weight * 0.25;
        paperPoints = Math.round(paperPoints);

        let metalPoints = res.data[1].weight * 1;
        metalPoints = Math.round(metalPoints);

        if(paperPoints < 0) {
            paperPoints = 0;
        }

        if(metalPoints < 0) {
            metalPoints = 0;
        }

        let paperWeight, metalWeight;
        if(res.data[0].weight > 1000) {
            paperWeight = (res.data[0].weight/1000.0) + "Kg";
        } else {
            paperWeight = res.data[0].weight + "g";
        }

        if(res.data[1].weight > 1000) {
            metalWeight = (res.data[1].weight/1000.0) + "Kg";
        } else {
            metalWeight = res.data[1].weight + "g";
        }

        const totalPoints = paperPoints + metalPoints;

        dispatch({
            type: GET_POINTS,
            payload: {
                paper: {
                    weight: paperWeight, 
                    full: res.data[0].full, 
                    points: paperPoints
                },
                metal: {
                    weight: metalWeight,
                    full: res.data[1].full,
                    points: metalPoints
                },
                total: totalPoints
            }
        });
    } catch (err) {
        console.log(err);
    }
}