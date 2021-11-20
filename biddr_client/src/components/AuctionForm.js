import React from 'react'
import { Auction } from '../requests'

export default function AuctionForm(props) {


    function handleSubmit(event) {
        event.preventDefault();
        console.log(props)
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        const auction = {
            title: formData.get('title'),
            description: formData.get('description'),
            ends_at: formData.get('ends_at'),
            reserve_price: formData.get('reserve_price'),
        }
        Auction.create(auction).then(data => {
            console.log(data)
            if (data.id) {
                const aid = data.id;
                window.location.replace(`/auctions/${aid}`)
                
            } 
        })
        currentTarget.reset();
    }

    return (
        <div>
        <form className="col-md-8 mx-3 my-3" onSubmit={(event) => {handleSubmit(event)}}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"  />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description"  />
                
            </div>
            <div className="d-flex">
                <label htmlFor="ends_at">Ends At</label>
                <input type="date" name="ends_at" id="ends_at"  />
    
               
            </div>
            <div className="d-flex">
                <label htmlFor="price">Reseve Price</label>
                <input type="number" name="reserve_price" id="reserve_price"  />
                
                
            </div>
            <button className="btn btn-dark" type="submit">
                Save
            </button>
        </form>
        </div>
    )
}
