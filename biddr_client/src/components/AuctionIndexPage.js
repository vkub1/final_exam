import React, {useState, useEffect} from 'react'
import {Auction} from '../requests'
import {Link} from 'react-router-dom'


export default function AuctionIndexPage() {
    const [auctions, setAuctions] = useState([]);

    useEffect(()=> {
        Auction.index().then(auctions => {
            setAuctions(auctions)
        })
    })

    return (
        <div>
            <div id="auctions-header"><h1 className="text-center py-3">Auctions</h1></div>
            {
                auctions.map((e) => {
                    const showLink = `/auctions/${e.id}`
                    return (
                        <div key={e.id} className="container col-md-12 mx-3 my-5">
                        <Link to={showLink} className="nav-link px-2"><h3>{e.title}</h3></Link>
                        <h5 className="px-2">Posted On: {new Date(e.created_at).toLocaleDateString()}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
