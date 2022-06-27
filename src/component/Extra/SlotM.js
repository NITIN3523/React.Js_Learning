import React from "react";
import './C5.css';

const heading = {
    padding: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: '900',
    color: '#868686',
    backgroundColor: '#fff'
}
const cardslot = {
    borderRadius: '12px',
    borderColor: 'yellow',
    borderStyle: 'double',
    justifyContent  : 'center',
    height: 'fit-content',
    width: 'fit-content',
    padding: '0.5rem',
    textAlign: 'center',
    marginTop: '22px'
}

const SlotM = (probs) => {
    let x = probs.x;
    let y = probs.y;
    let z = probs.z;
    if ((x === y) && (y === z)) {
        return (
            <>
                <h1>{x} {y} {z}</h1>
                <h1>This is Matching</h1>
            </>
        );
    }
    else {
        return (
            <>
                <h1>{x} {y} {z}</h1>
                <h1>This is not Matching</h1>
            </>
        );
    }
}
const Machine = () => {
    return (
        <>
            <div>
                <h1 style={heading}>Play slot machine game</h1>
                <div style={{justifyContent:'center',display:'flex'}}>
                    <div style={cardslot}>
                        <SlotM x='45' y='45' z='45' /><hr />
                        <SlotM x='45' y='45' z='00' /><hr />
                        <SlotM x='55' y='55' z='55' /><hr />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Machine;