class ProductsController < ApplicationController
  def show
    @category = ProductCategory.visible.friendly.find(params[:category_id])
    @product = @category.products.visible.friendly.find(params[:id])
  end
end
