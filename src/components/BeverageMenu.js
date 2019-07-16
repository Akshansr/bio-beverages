import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBeverage } from '../actions/beverageQueue';
import { editOrderStatus } from '../actions/beverageQueue';

import moment from 'moment';
import uuid from 'uuid';


class BeverageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            beverageName: '',
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
            let { name, beverageName, OrderCreatedTimeStamp } = this.state
            this.props.dispatch(addBeverage(
                {
                    OrderCreatedTimeStamp,
                    BeverageBarOrderId: uuid(),
                    OrderedBeverage: {
                        BeverageId: uuid(),
                        Name: beverageName
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

            this.moveNext(OrderCreatedTimeStamp)
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
        }, 5000);
        setTimeout(() => {
            this.props.dispatch(editOrderStatus(
                orderedTime,
                {
                    IsBeingMixed: false,
                    IsReadyToCollect: true,
                }
            ))
        }, 10000);
        setTimeout(() => {
            this.props.dispatch(editOrderStatus(
                orderedTime,
                {
                    IsBeingMixed: false,
                    IsReadyToCollect: false,
                    IsCollected: true
                }
            ))
        }, 15000);
    }
    render() {
        const { Beverages } = this.props.beveragesMenu[0];
        return (

            <div className='container text-white'>
                <div className="row mt-5">
                    <div className="col-sm-3 "></div>
                    <div className="col-sm-6" >
                        <h4 className="h6 text-center ">ORDER YOUR BEVERAGE</h4>
                        <div style={{ border: '1px solid #fff' }}>

                            <div className="p-5">
                                <form className="form-group"
                                    autoComplete="off"
                                    onSubmit={this.handleOnSubmit}>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label for="usr">Name: </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="text" name='name'

                                                onChange={this.handleChange}
                                                className="form-control form-input"
                                                placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-sm-3"><label for="usr">Name: </label></div>
                                        <div className="col-sm-9">
                                            <select className="form-control pl-2 form-input" name='beverageName' onChange={this.handleChange}>
                                                <option > -PLEASE SELECT-</option>
                                                {Beverages.map((beverage) => (
                                                    <option value={beverage.Name} >
                                                        {beverage.Name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-3 text-right">
                                        <button type="submit"
                                            className="btn btn-success">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="text-right text-white pt-2 ">
                            <Link to='/beverageQueue'>
                                <a className="text-white h5">Track your order!!</a>
                            </Link>
                        </div>
                    </div>
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
