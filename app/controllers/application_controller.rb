class ApplicationController < ActionController::Base
  before_action :product_categories_map
  private
  def product_categories_map
    @product_categories_map ||= ProductCategory.visible.map { |category|
      [category.name, category.products.visible.pluck(:name)]
    }.to_h
  end
end
