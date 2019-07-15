import React from 'react';
import { connect } from 'react-redux';

const BeverageQueue = (props) => {

    return (
        <div className="container">
            <ul>
                {props.beveragesQueue.map((bvq) => {
                    if (!bvq.IsBeingMixed && !bvq.IsReadyToCollect && !bvq.IsCollected) {
                        return <li>{bvq.OrderedBeverage.Name}</li>
                    }

                })}
            </ul>

            <ul>
                {props.beveragesQueue.map((bvq) => {
                    if (bvq.IsBeingMixed && !bvq.IsReadyToCollect && !bvq.IsCollected) {
                        return <li>{bvq.OrderedBeverage.Name}</li>
                    }

                })}
            </ul>

            <ul>
                {props.beveragesQueue.map((bvq) => {
                    if (!bvq.IsBeingMixed && bvq.IsReadyToCollect && !bvq.IsCollected) {
                        return <li>{bvq.OrderedBeverage.Name}</li>
                    }

                })}
            </ul>


        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        beveragesQueue: state.beveragesQueue
    };
};

export default connect(mapStateToProps)(BeverageQueue);
