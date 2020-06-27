import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Danger1, 
    Danger2,
    Money, 
    Paper0, 
    Paper25, 
    Paper50, 
    Paper75, 
    Paper100,
    Metal0,
    Metal25,
    Metal50,
    Metal75,
    Metal100,
    Others0,
    Others25,
    Others50,   
    Others75,
    Others100,
    Plastic0,
    Plastic25,
    Plastice50,
    Plastice75,
    Plastice100 } from './PieChartComponent/Svg';
import { getPoints } from '../../actions/points';

const PieChart = ({paper, metal, total, getPoints}) => {
    useEffect(() => {
        getPoints();
        //eslint-disable-next-line
    },[]);

    return (
        <div style={{display:'inline-flex', flexDirection: 'column'}}>
        <div style={{display: 'flex',flexDirection: 'row', marginBottom: '0.75vw'}}>
            <div style={{position:'relative',width:'200px', height:'200px', margin: '0 0.75vw 0 0.75vw'}}>
                <Paper0/>
                <div style={{textAlign: 'right',marginTop: '38%'}}>
                    <Danger1/>
                    <div style={{display:'inline-block',marginRight: '3%'}}>
                        <div>Paper</div>
                        <div>{paper != undefined ? paper.full : ""}</div>
                        <div>{paper != undefined ? paper.weight : ""}</div>
                    </div>
                    <div style={{textAlign: 'left',position:'absolute',bottom:'1%',left:'15%'}}>
                        <Money/>
                        <span>{paper != undefined ? paper.points : ""}</span>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'200px',height:'200px',margin: '0 0.75vw 0 0'}}>
                <Metal0/>
                <div style={{textAlign: 'left', marginTop: '38%'}}>
                    <div style={{display:'inline-block',marginLeft: '3%'}}>
                        <div>Metal</div>
                        <div>{metal != undefined ? metal.full : ""}</div>
                        <div>{metal != undefined ? metal.weight : ""}</div>
                    </div>
                    <Danger2/>
                    <div style={{textAlign: 'right', position:'absolute',bottom:'1%',right:'15%'}}>
                        <Money/>
                        <span>{metal != undefined ? metal.points : ""}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <div style={{position:'relative',width:'200px',height:'200px',margin: '0 0.75vw 0 0.75vw'}}>
                <Others0/>
                <div style={{textAlign: 'right',marginTop: '28%'}}>
                    <Danger1/>
                    <div style={{display:'inline-block',marginRight: '3%'}}>
                        <div>Others</div>
                        <div>Empty</div>
                        <div>0g</div>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'200px',height:'200px',margin: '0 0.75vw 0 0'}}>
                <Plastic0/>
                <div style={{textAlign: 'right',position:'absolute',top:'1%',right:'15%'}}>
                    <Money/>
                    <span>0</span>
                </div>
                <div style={{textAlign: 'left',marginTop: '28%'}}>
                    <div style={{display:'inline-block',marginLeft: '3%'}}>
                        <div>Plastic</div>
                        <div>Empty</div>
                        <div>0g</div>
                    </div>
                    <Danger2/>
                </div>
            </div>
        </div>
    </div>
    );
};

PieChart.propTypes = {
    paper: PropTypes.object,
    metal: PropTypes.object,
    total: PropTypes.number.isRequired,
    getPoints: PropTypes.func.isRequired
}

const mapStateToProps = state => {
return({
    paper: state.points.paper,
    metal: state.points.metal,
    total: state.points.total
});
};

export default connect(mapStateToProps,{getPoints})(PieChart);