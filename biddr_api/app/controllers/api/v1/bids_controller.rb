class Api::V1::BidsController < Api::ApplicationController
    def create
        auction = Auction.find params[:auction_id]
        bid = Bid.new(params.require(:bid).permit(:amount))
        bid.user = User.first
        bid.auction = auction
        if bid.valid?
            bid.save
            render(json:{ id: bid.id})
        else
            render(json: {errors: bid.errors, status:422})
        end
    end

    
end
