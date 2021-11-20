import React from 'react'

export default function AuctionDetails(props) {
    const {auction}  = props
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="d-flex flex-column flex-wrap">
            <h1 className="mx-3">{auction.title}</h1>
            <div className="d-flex">
                <div className="col-md-8 col-xs-6 col-6 mx-3 flex-grow-1">
                    <p className="col-md-8 col-xs-12">{auction.description}</p>
                    <div className="d-flex col-md-8 col-xs-12">
                        <form onSubmit={event => {props.submitBid(event, auction.id)}}>
                        <input type="number" name="amount" placeholder="Bid Amount" id="amount" 
                        className="form-control col-md-5 col-xs-8" />
                        <input type="submit" value="Bid" className="btn btn-dark mx-1 col-md-3 col-xs-4 "/>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6 col-6 d-flex flex-column">
                    <p className="mb-3">Current Price: ${auction.current_price}</p>
                    <p className="mb-3">Ends At: {new Date(auction.ends_at).toLocaleDateString('en-US', options)}</p>
                    
                </div>
            </div>
        </div>
    )
}
