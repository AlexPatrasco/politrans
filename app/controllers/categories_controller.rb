class CategoriesController < ApplicationController
  def show
    @category = ProductCategory.visible.find_by(name: params[:id])
    @products = @category.products.visible.order(order: :asc)
  end

end
