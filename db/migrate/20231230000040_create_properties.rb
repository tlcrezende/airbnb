class CreateProperties < ActiveRecord::Migration[7.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :headline
      t.string :description
      t.string :city
      t.string :state
      t.string :country
      t.string :address_1
      t.string :address_2

      t.timestamps
    end
  end
end
