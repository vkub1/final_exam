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
        <form className="col-12 mx-3 my-3 d-flex flex-column align-items-center" onSubmit={(event) => {handleSubmit(event)}}>
            <div className="form-group d-flex my-3 col-8">
                <label htmlFor="title">Title</label>
                <input type="text" class="form-control mx-2" name="title" id="title"  />
            </div>
            <div className="form-group d-flex col-8 my-3">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" className="form-control mx-2" id="description"  />
                
            </div>
            <div className="form-group d-flex col-8 my-3">
                <label htmlFor="ends_at">Ends At</label>
                <input type="date" name="ends_at" className="form-control mx-2" id="ends_at"  />
    
               
            </div>
            <div className="form-group d-flex col-8 my-3">
                <label htmlFor="price">Reseve Price</label>
                <input type="number" name="reserve_price" className="form-control mx-2" id="reserve_price"  />
                
            </div>
            <button className="btn btn-dark px-5" id="create-bid" type="submit">
                Save
            </button>
        </form>
        </div>
    )
}
