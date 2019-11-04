class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :contact

  def home
    @news = News.visible.limit(3)
    puts @news
    @promotions = Promotion.visible.where("ends_at > ?", DateTime.now).limit(4)
  end

  def about
    @sections = AboutSection.visible.order(order: :asc)
    @api_key ||= Rails.application.credentials.gmaps[:api_key]
  end

  def contact
    ContactUsMailer.user_inquiry(params[:email], params[:name], params[:contents]).deliver_later()
  end
end
