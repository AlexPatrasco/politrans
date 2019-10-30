class CategoriesController < ApplicationController
  def show
    @category = ProductCategory.visible.friendly.find(params[:id])
    @products = @category.products.visible.order(order: :asc)
  end

end
