class CreateAboutSections < ActiveRecord::Migration[5.2]
  def change
    create_table :about_sections do |t|
      t.string :title, null: false
      t.string :subtitle
      t.integer :order, unique: true
      t.boolean :visible, default: false, null: false
      t.text :body

      t.timestamps
    end
  end
end
