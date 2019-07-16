import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Orders from './Orders';
import Menu from './Menu';


const BeverageQueue = (props) => {
    const { Beverages } = props.beveragesMenu[0];

    return (

        <div class='container text-white'>
            <div class="row mt-4">
                <div class="col-sm-3 " >
                    <h4 class="h6 text-center text-bold">BEVERAGE MENU</h4>
                    <div class="" style={{ border: '1px solid #fff' }}>
                        <div class="m-3">
                            {Beverages.map((bm) =>
                                (
                                    <Menu beverageName={bm.Name} />
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div class="col-sm-9 sm-padding" >
                    <h4 class="h6 text-center ">BEVERAGE QUEUE</h4>
                    <div style={{ border: '1px solid #fff' }}>
                        <div class="row p-3">
                            <div class="col-md-4">
                                <div class="text-center h6">IN THE QUEUE</div>
                                {props.beveragesQueue.map((bvq) => {
                                    const { IsBeingMixed, IsReadyToCollect, IsCollected } = bvq;
                                    if (!IsBeingMixed && !IsReadyToCollect && !IsCollected) {
                                        return (
                                            <Orders
                                                beverageName={bvq.OrderedBeverage.Name}
                                                custName={bvq.BeverageBarUserFirstName}
                                            />
                                        )
                                    }

                                })}

                            </div>
                            <div class="col-md-4 sm-padding">
                                <div class="text-center h6">BEING MIXED</div>
                                {props.beveragesQueue.map((bvq) => {
                                    const { IsBeingMixed, IsReadyToCollect, IsCollected } = bvq;
                                    if (IsBeingMixed && !IsReadyToCollect && !IsCollected) {
                                        return (
                                            <Orders
                                                beverageName={bvq.OrderedBeverage.Name}
                                                custName={bvq.BeverageBarUserFirstName}
                                            />
                                        )
                                    }

                                })}
                            </div>
                            <div class="col-md-4 sm-padding">
                                <div class="text-center h6">READY TO COLLECT</div>
                                {props.beveragesQueue.map((bvq) => {
                                    const { IsBeingMixed, IsReadyToCollect, IsCollected } = bvq;
                                    if (!IsBeingMixed && IsReadyToCollect && !IsCollected) {
                                        return (
                                            <Orders
                                                beverageName={bvq.OrderedBeverage.Name}
                                                custName={bvq.BeverageBarUserFirstName}
                                            />

                                        )
                                    }

                                })}
                            </div>
                        </div>

                    </div>
                    <div className="text-center pt-4">
                        <Link to='/'>
                            <button className="btn btn-success">Order More!!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        beveragesMenu: state.beveragesMenu,
        beveragesQueue: state.beveragesQueue
    };
};

export default connect(mapStateToProps)(BeverageQueue);
