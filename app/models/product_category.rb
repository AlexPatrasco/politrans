class ProductCategory < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :products
  scope :visible, -> { where(visible: true) }
end
