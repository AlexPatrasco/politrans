class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.string :image_link
      t.text :contents
      t.boolean :visible

      t.timestamps
    end
  end
end
