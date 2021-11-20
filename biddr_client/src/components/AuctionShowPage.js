import React, {useEffect, useState} from 'react'
import AuctionDetails from './AuctionDetails'
import { Auction } from '../requests'
import BidList from './BidList'

export default function AuctionShowPage(props) {

    const [auction, setAuction] = useState({})

    useEffect(() => {
        Auction.show(9).then(auction => {
            setAuction(auction)
        })
    }, [])

    return (
        <div>
            <AuctionDetails 
                auction={auction}
            />
            <BidList 
                bids={auction.bids_desc}
            />
        </div>
    )
}
