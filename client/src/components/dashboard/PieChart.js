import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
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

const PieChart = () => {
    return (
        <div style={{display:'inline-flex', flexDirection: 'column'}}>
        <div style={{display: 'flex',flexDirection: 'row', marginBottom: '0.75vw'}}>
            <div style={{position:'relative',width:'200px', height:'200px', margin: '0 0.75vw 0 0.75vw'}}>
                <Paper0/>
                <div style={{textAlign: 'right',marginTop: '38%'}}>
                    <Danger1/>
                    <div style={{display:'inline-block',marginRight: '3%'}}>
                        <div>Paper</div>
                        <div>80% Full</div>
                        <div>1 Kg</div>
                    </div>
                    <div style={{textAlign: 'left',position:'absolute',bottom:'1%',left:'15%'}}>
                        <Money/>
                        <span>10</span>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'200px',height:'200px',margin: '0 0.75vw 0 0'}}>
                <Metal0/>
                <div style={{textAlign: 'left', marginTop: '38%'}}>
                    <div style={{display:'inline-block',marginLeft: '3%'}}>
                        <div>Metal</div>
                        <div>80% Full</div>
                        <div>1 Kg</div>
                    </div>
                    <Danger2/>
                    <div style={{textAlign: 'right', position:'absolute',bottom:'1%',right:'15%'}}>
                        <Money/>
                        <span>10</span>
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
                        <div>80% Full</div>
                        <div>1 Kg</div>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'200px',height:'200px;',margin: '0 0.75vw 0 0'}}>
                <Plastic0/>
                <div style={{textAlign: 'right',position:'absolute',top:'1%',right:'15%'}}>
                    <Money/>
                    <span>10</span>
                </div>
                <div style={{textAlign: 'left',marginTop: '28%'}}>
                    <div style={{display:'inline-block',marginLeft: '3%'}}>
                        <div>Plastic</div>
                        <div>80% Full</div>
                        <div>1 Kg</div>
                    </div>
                    <Danger2/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PieChart;