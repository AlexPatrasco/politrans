class ProductsController < ApplicationController
  def show
    @category = ProductCategory.visible.find_by(name: params[:category_id])
    @product = @category.products.visible.find_by(name: params[:id])
  end
end
