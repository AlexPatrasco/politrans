class ProductCategory < ApplicationRecord
  has_many :products
  scope :visible, -> { where(visible: true) }
end
