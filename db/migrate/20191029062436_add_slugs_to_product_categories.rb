class AddSlugsToProductCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :product_categories, :slug, :string
    add_index :product_categories, :slug, unique: true
  end
end
