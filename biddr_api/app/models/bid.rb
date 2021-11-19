class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user

  validates :amount, presence: {message: "must be provided"}, numericality: {greater_than: :current_highest, message:"must be greater than the highest bid"}

  def current_highest
    auction.current_price
  end
     
end
