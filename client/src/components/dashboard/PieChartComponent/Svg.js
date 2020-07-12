import React, { Fragment } from 'react';
import danger from './danger.svg';
import money from './money.svg';
import paper0 from './paper0.svg';
import paper25 from './paper25.svg';
import paper50 from './paper50.svg';
import paper75 from './paper75.svg';
import paper100 from './paper100.svg';
import metal0 from './metal0.svg';
import metal25 from './metal25.svg';
import metal50 from './metal50.svg';
import metal75 from './metal75.svg';
import metal100 from './metal100.svg';
import others0 from './others0.svg';
import others25 from './others25.svg';
import others50 from './others50.svg';
import others75 from './others75.svg';
import others100 from './others100.svg';
import plastic0 from './plastic0.svg';
import plastic25 from './plastic25.svg';
import plastic50 from './plastic50.svg';
import plastic75 from './plastic75.svg';
import plastic100 from './plastic100.svg';

const Danger1 = ({view}) => {
    return(
        <Fragment>
            <img src={danger} style={{display: view, width: '20%',marginRight: '5%'}} alt="danger"/>
        </Fragment>
    );
};

const Danger2 = ({view}) => {
    return(
        <Fragment>
            <img src={danger} style={{display: view, width: '20%', marginLeft: '5%'}} alt="danger"/>
        </Fragment>
    );
};

const Money = () => {
    return(
        <Fragment>
            <img src={money} alt="coins" style={{width:'10%',verticalAlign: '-13%'}}/>
        </Fragment>
    );
};

const Paper0 = () => (
    <Fragment>
        <img src={paper0} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="paper"/>
    </Fragment>
);

const Paper25 = () => {
    return(<Fragment>
        <img src={paper25} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="paper"/>
    </Fragment>);
};

const Paper50 = () => {
    return(<Fragment>
        <img src={paper50} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="paper"/>
    </Fragment>);
};

const Paper75 = () => {
    return(<Fragment>
        <img src={paper75} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="paper"/>
    </Fragment>);
};

const Paper100 = () => {
    return(<Fragment>
        <img src={paper100} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="paper"/>
    </Fragment>);
};

const Metal0 = () => {
    return(
        <Fragment>
            <img src={metal0} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="metal"/>
        </Fragment>
    );
};

const Metal25 = () => {
    return(
        <Fragment>
            <img src={metal25} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="metal"/>
        </Fragment>
    );
};

const Metal50 = () => {
    return(
        <Fragment>
            <img src={metal50} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="metal"/>
        </Fragment>
    );
};

const Metal75 = () => {
    return(
        <Fragment>
            <img src={metal75} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="metal"/>
        </Fragment>
    );
};

const Metal100 = () => {
    return(
        <Fragment>
            <img src={metal100} style={{width: '260px', position: 'absolute', zIndex:'-1'}} alt="metal"/>
        </Fragment>
    );
};

const Others0 = () => {
    return(
        <Fragment>
            <img src={others0} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="others"/>
        </Fragment>
    );
};

const Others25 = () => {
    return(
        <Fragment>
            <img src={others25} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="others"/>
        </Fragment>
    );
};

const Others50 = () => {
    return(
        <Fragment>
            <img src={others50} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="others"/>
        </Fragment>
    );
};

const Others75 = () => {
    return(
        <Fragment>
            <img src={others75} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="others"/>
        </Fragment>
    );
};

const Others100 = () => {
    return(
        <Fragment>
            <img src={others100} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="others"/>
        </Fragment>
    );
};

const Plastic0 = () => {
    return(
        <Fragment>
            <img src={plastic0} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="plastic"/>
        </Fragment>
    );
};

const Plastic25 = () => {
    return(
        <Fragment>
            <img src={plastic25} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="plastic"/>
        </Fragment>
    );
};

const Plastic50 = () => {
    return(
        <Fragment>
            <img src={plastic50} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="plastic"/>
        </Fragment>
    );
};

const Plastic75 = () => {
    return(
        <Fragment>
            <img src={plastic75} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="plastic"/>
        </Fragment>
    );
};

const Plastic100 = () => {
    return(
        <Fragment>
            <img src={plastic100} style={{width: '260px', position: 'absolute',zIndex:'-1'}} alt="plastic"/>
        </Fragment>
    );
};

export { 
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
Plastic50,
Plastic75,
Plastic100};