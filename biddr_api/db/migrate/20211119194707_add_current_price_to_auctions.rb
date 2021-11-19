class AddCurrentPriceToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :current_price, :float
  end
end
