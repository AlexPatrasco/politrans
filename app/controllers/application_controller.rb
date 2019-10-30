class ApplicationController < ActionController::Base
  before_action :product_categories_map
  private
  def product_categories_map
    @product_categories_map ||= ProductCategory.visible.map { |category|
      [category.name, {slug: category.slug, products: category.products.visible.pluck(:name, :slug)}]
    }.to_h
  end
end
