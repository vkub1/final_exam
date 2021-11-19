class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :created_at,
    :updated_at,
    :ends_at,
    :reserve_price,
    :current_price,

  )

  belongs_to :user, key: :seller
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,:email
    )
  end

  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,:amount,:created_at,:user_id
    )

  end

end
