class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy
    belongs_to :user

    validates :title, presence: {message: "must be provided"}
    validates :description, presence: {message: "must be provided"}
    validates :ends_at, presence: {message: "must be provided"}
    validates :reserve_price, presence: {message: "must be provided"}

    def current_price
        self.bids.order("amount DESC").first.amount rescue 0
    end

    def bids_desc
        self.bids.order("amount DESC")
    end

end
