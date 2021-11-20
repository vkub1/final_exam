class AddUsersReferenceToBids < ActiveRecord::Migration[6.1]
  def change
    add_reference :bids, :user, null: false, foreign_key: true
  end
end
