import React from 'react'

export default function BidList(props) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="mx-2 my-3">
            Previous Bids:
            {
                props.bids ? props.bids.map((element) => {
                    return (
                        <div className="mx-3 my-2">
                            <p>${element.amount} on  {new Date(element.created_at).toLocaleDateString('en-US', options)}</p>
                        </div>
                    )
                }): null
            }
        </div>
    )
}
