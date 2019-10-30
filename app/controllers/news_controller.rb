class NewsController < ApplicationController
  def index
    @news = News.visible.order(created_at: :desc)
  end

  def show
    @article = News.visible.friendly.find(params[:id])
  end
end
