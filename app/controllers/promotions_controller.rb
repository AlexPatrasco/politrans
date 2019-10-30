class PromotionsController < ApplicationController
  def index
    @promotions = Promotion.active.visible.order(ends_at: :asc)
  end
end
