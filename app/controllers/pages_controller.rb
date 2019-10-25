class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :contact
  def home

  end

  def about
    @sections = AboutSection.visible.order(order: :asc)
  end

  def contact
    ContactUsMailer.user_inquiry(params[:email], params[:name], params[:contents]).deliver_later()
  end
end
