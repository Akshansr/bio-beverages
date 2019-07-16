import React from 'react'

const Orders = ({ beverageName, custName }) =>
    (
        <div className="py-1">
            <div className='bg-warning'>
                <div className="py-3 text-center text-white">
                    <strong>{beverageName}</strong>
                </div>
            </div>
            <div className="bg-white text-body">
                <div className="p-1 text-center">
                    <strong>{custName}</strong>
                </div>
            </div>
        </div>
    )

export default Orders;

