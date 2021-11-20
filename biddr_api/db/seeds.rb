# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = "123"
User.create(
    name: "Admin User",
    email: 'admin@user.com',
    password: PASSWORD
)

10.times do 
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.unique.email,
        password: PASSWORD
    )
end

users = User.all

10.times do 
    a = Auction.create(
        title: Faker::Lorem.paragraph,
        description: Faker::Lorem.paragraph(sentence_count: 5),
        ends_at: Date.tomorrow(),
        reserve_price: rand(50...1000),
        user: users.sample
    )
    if a.valid?
        b = Bid.create(
            amount: rand(5...500),
            user: users.sample,
            auction: a
        )
    end
end

puts "generated #{User.count} users"
puts "generated #{Auction.count} auction items"
puts "generated #{Bid.count} bids"

