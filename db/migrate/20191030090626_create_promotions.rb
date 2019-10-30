class CreatePromotions < ActiveRecord::Migration[5.2]
  def change
    create_table :promotions do |t|
      t.string :title, null: false
      t.boolean :visible, null: false, default: false
      t.datetime :starts_at
      t.datetime :ends_at
      t.text :description, null: false
      t.string :image_link
      t.string :slug

      t.timestamps
    end

    add_index :promotions, :slug, unique: true
  end
end
