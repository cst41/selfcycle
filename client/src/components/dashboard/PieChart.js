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
    });
    const pieStyle1 = {
        wordWrap: 'normal',
        display: 'inline-block'
    };

    const pieStyle2 = {
        width: '40%',
        wordWrap: 'normal',
        display: 'inline-block'
    };
    return (
        <div style={{display:'inline-flex', flexDirection: 'column'}}>
        <div style={{display: 'flex',flexDirection: 'row', marginBottom: '0.75vw'}}>
            <div style={{position:'relative',width:'260px', height:'260px', margin: '0 0.75vw 0 0.75vw'}}>
                {paper == undefined ? "" : (
                    paper.full === "25% Full" ? <Paper25/> : 
                    (paper.full === "50% Full" ? <Paper50/> : 
                    (paper.full === "75% Full" ? <Paper75/> : 
                    (paper.full === "100% Full" ? <Paper100/> : <Paper0/>)))
                    )}
                <div style={{textAlign: 'right',marginTop: '38%'}}>
                    <div style={{display:'inline-block',marginRight: '3%'}}>
                        <div>Paper</div>
                        <div>
                            {paper == undefined ? "" : (
                                (paper.full === "100% Full") || (paper.weight >= 5000) ? <Danger1 view={'inline'} /> : <Danger1 view={"none"}/>
                            )}
                            <span style={paper == undefined ? pieStyle1 : (paper.full === "Empty" ? pieStyle1 : pieStyle2)}>
                            {paper == undefined ? "" : (
                                paper.full === "25% Full" ? "Reaching 25% Fullness" : 
                                (paper.full === "50% Full" ? "Reaching 50% Fullness" : 
                                (paper.full === "75% Full" ? "Reaching 75% Fullness" : 
                                (paper.full === "100% Full" ? "Reaching 100% Fullness" : "Empty")))
                            )}
                            </span>
                        </div>
                        <div>{paper != undefined ? (
                            paper.weight >= 1000 ? ((paper.weight/1000.0) + "Kg") : (paper.weight + "g")
                        ) : ""}</div>
                    </div>
                    <div style={{textAlign: 'left',position:'absolute',bottom:'1%',left:'15%'}}>
                        <Money/>
                        <span>{paper != undefined ? paper.points : ""}</span>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'260px',height:'260px',margin: '0 0.75vw 0 0'}}>
                {
                    metal == undefined ? "" :
                    (metal.full === "25% Full" ? <Metal25/> : 
                    (metal.full === "50% Full" ? <Metal50/> :
                    (metal.full === "75% Full" ? <Metal75/> :
                    (metal.full === "100% Full" ? <Metal100/> : <Metal0/>))))
                }
                <div style={{textAlign: 'left', marginTop: '38%'}}>
                    <div style={{display:'inline-block',marginLeft: '3%'}}>
                        <div>Metal</div>
                        <div>
                            <span style={{width: '40%', wordWrap: 'normal', display: 'inline-block'}}>
                            {
                                metal == undefined ? "" :
                                (metal.full === "25% Full" ? "Reaching 25% Fullness" : 
                                (metal.full === "50% Full" ? "Reaching 50% Fullness" :
                                (metal.full === "75% Full" ? "Reaching 75% Fullness" :
                                (metal.full === "100% Full" ? "Reaching 100% Fullness" : "Empty"))))
                            }
                            </span>
                            {metal == undefined ? "" : (
                                (metal.full === "100% Full") || (metal.weight >= 5000) ? <Danger2 view={'inline'}/> : <Danger2 view={'none'}/>
                            )}
                        </div>
                        <div>{metal != undefined ? (
                            metal.weight >= 1000 ? ((metal.weight/1000.0) + "Kg") : (metal.weight + "g") 
                        ) : ""}</div>
                    </div>
                    <div style={{textAlign: 'right', position:'absolute',bottom:'1%',right:'15%'}}>
                        <Money/>
                        <span>{metal != undefined ? metal.points : ""}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <div style={{position:'relative',width:'260px',height:'260px',margin: '0 0.75vw 0 0.75vw'}}>
                <Others0/>
                <div style={{textAlign: 'right',marginTop: '28%'}}>
                    <Danger1 view={'none'}/>
                    <div style={{display:'inline-block',marginRight: '3%'}}>
                        <div>Others</div>
                        <div>Empty</div>
                        <div>0g</div>
                    </div>
                </div>
            </div>
            <div style={{position:'relative',width:'260px',height:'260px',margin: '0 0.75vw 0 0'}}>
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
                    <Danger2 view={'none'}/>
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
    points: PropTypes.number.isRequired,
    getPoints: PropTypes.func.isRequired
}

const mapStateToProps = state => {
return({
    paper: state.points.paper,
    metal: state.points.metal,
    total: state.points.total,
    points: state.points.points
});
};

export default connect(mapStateToProps,{getPoints})(PieChart);