class Product < ApplicationRecord
  belongs_to :product_category
  scope :visible, -> { where(visible: true) }
end
