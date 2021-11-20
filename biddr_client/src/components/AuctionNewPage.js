import React from 'react';
import AuctionForm from './AuctionForm';

export default function AuctionNewPage(props) {


    return (
        <div>
            <div id="auction-new"><h1 className="text-center py-3">Create an Auction</h1></div>
            <AuctionForm props={props}/>
        </div>
    )
}
