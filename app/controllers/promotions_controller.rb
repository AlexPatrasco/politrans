class PromotionsController < ApplicationController
  def index
    @promotions = Promotion.active.visible.order(ends_at: :asc)
    @past = Promotion.past.visible.order(ends_at: :desc)
    @upcoming = Promotion.upcoming.visible.order(starts_at: :asc)
  end

  def show
    @promotion = Promotion.visible.friendly.find(params[:id])
  end
end
