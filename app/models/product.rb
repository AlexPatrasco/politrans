class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :name, :use => :scoped, :scope => :product_category

  belongs_to :product_category
  scope :visible, -> { where(visible: true) }
end
