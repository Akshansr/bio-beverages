import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBeverage } from '../actions/beverageQueue';
import { editOrderStatus } from '../actions/beverageQueue';

import moment from 'moment';
import uuid from 'uuid';


class BeverageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            beverageId: '',
            OrderCreatedTimeStamp: moment().format()

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleOnSubmit(e) {
        e.preventDefault();

        setTimeout(() => {
            let { name, beverageId, OrderCreatedTimeStamp } = this.state
            this.props.dispatch(addBeverage(
                {
                    OrderCreatedTimeStamp,
                    BeverageBarOrderId: uuid(),
                    OrderedBeverage: {
                        BeverageId: beverageId,
                        Name: name
                    },
                    OrderQuantity: 0,
                    IsBeingMixed: false,
                    IsReadyToCollect: false,
                    IsCollected: false,
                    BeverageBarUserId: uuid(),
                    BeverageBarUserFirstName: name,
                    OrderDeliveredTimeStamp: moment().format()
                }
            ))

            console.log(this.moveNext(OrderCreatedTimeStamp))
            this.props.history.push('/beverageQueue')

        }, 1000);



    }
    moveNext(orderedTime) {
        setTimeout(() => {
            this.props.dispatch(editOrderStatus(
                orderedTime,
                {
                    IsBeingMixed: true
                }
            ))
        }, 5000)
        setTimeout(() => {
            this.props.dispatch(editOrderStatus(
                orderedTime,
                {
                    IsBeingMixed: false,
                    IsReadyToCollect: true,
                }
            ))
        }, 10000)
        setTimeout(() => {
            this.props.dispatch(editOrderStatus(
                orderedTime,
                {
                    IsBeingMixed: false,
                    IsReadyToCollect: false,
                    IsCollected: true
                }
            ))
        }, 15000)
    }
    render() {
        const { Beverages } = this.props.beveragesMenu[0];
        return (
            <div className="container">
                <h1 className="h1 text-center">Order Your Beverage</h1>
                <div className="text-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="form-group"
                            onSubmit={this.handleOnSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Name</span>
                                </div>
                                <input type="text" name='name'

                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Username" />
                            </div>
                            <select name='beverageId' onChange={this.handleChange}>
                                <option> ----Please Select----</option>
                                {Beverages.map((beverage) => (
                                    <option href="#" value={beverage.BeverageId} className="dropdown-item">
                                        {beverage.Name}
                                    </option>
                                ))}
                            </select>

                            <button type="submit"
                                className="form-control">Submit</button>


                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        beveragesMenu: state.beveragesMenu
    };
};

export default connect(mapStateToProps)(BeverageMenu);
