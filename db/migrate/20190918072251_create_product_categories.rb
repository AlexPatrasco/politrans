class CreateProductCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :product_categories do |t|
      t.string :name, null: false
      t.integer :order, unique: true
      t.boolean :visible, null: false, default: false
      t.string :icon_link
      t.string :image_link

      t.timestamps
    end
  end
end
