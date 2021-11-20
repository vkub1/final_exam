class User < ApplicationRecord
    has_secure_password

    has_many :bids, dependent: :destroy
    has_many :auctions, dependent: :destroy

    validates :name, presence: true


    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
end
