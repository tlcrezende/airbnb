class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :address_1
      t.string :state
      t.string :city
      t.string :country
      t.string :zip_code

      t.timestamps
    end
  end
end
