class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :order, null: false
      t.boolean :visible, null: false, default: false
      t.string :image_link
      t.string :icon_link
      t.belongs_to :product_category
      t.text :description

      t.timestamps
    end
  end
end
