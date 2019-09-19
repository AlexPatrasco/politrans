# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_19_111821) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "about_sections", force: :cascade do |t|
    t.string "title", null: false
    t.string "subtitle"
    t.integer "order"
    t.boolean "visible", default: false, null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_categories", force: :cascade do |t|
    t.string "name", null: false
    t.integer "order"
    t.boolean "visible", default: false, null: false
    t.string "icon_link"
    t.string "image_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name", null: false
    t.integer "order", null: false
    t.boolean "visible", default: false, null: false
    t.string "image_link"
    t.string "icon_link"
    t.bigint "product_category_id"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
  end

end
