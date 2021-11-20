import React, {useEffect, useState} from 'react'
import AuctionDetails from './AuctionDetails'
import { Auction, Bid } from '../requests'
import BidList from './BidList'

export default function AuctionShowPage(props) {

    const [auction, setAuction] = useState({})

    useEffect(() => {
        Auction.show(props.match.params.id).then(auction => {
            setAuction(auction)
        })
    }, [])


    const submitBid = (event, auctionId) => {
        event.preventDefault()
        const {currentTarget} = event
        const formData = new FormData(currentTarget)
        const bid = {
            amount: formData.get('amount')
        }
        Bid.create(bid, auctionId).then(() => {
            Auction.show(auctionId).then(auction => {
                setAuction(auction)
            })
             
        })
        currentTarget.reset();

    }


    return (
        <div>
            <AuctionDetails 
                auction={auction}
                submitBid = {submitBid}
            />
            <BidList 
                bids={auction.bids_desc}
            />
        </div>
    )
}
