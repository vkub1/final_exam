class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user

  validates :amount, presence: {message: "must be provided"}

  validate :is_highest_bid

  def is_highest_bid
    highest_bid = self.auction.current_price
    if highest_bid >= self.amount
      errors.add(:amount, "must be higher than current bid")
    end
  end

  after_save :update_auction

  def update_auction
    self.auction.update_highest_bid
  end     

  
end
