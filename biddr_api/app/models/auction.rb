class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy
    belongs_to :user
    after_initialize :set_defaults

    validates :title, presence: {message: "must be provided"}
    validates :description, presence: {message: "must be provided"}
    validates :ends_at, presence: {message: "must be provided"}
    validates :reserve_price, presence: {message: "must be provided"}

    def update_highest_bid
        highest_bid = self.bids.order("amount DESC").first.amount rescue 0
        self.current_price = highest_bid
        save
    end

    def set_defaults 
        self.current_price = 0
    end

end
