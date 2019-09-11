class PagesController < ApplicationController
  def home

  end

  def about
    @sections = AboutSection.visible.order(order: :asc)
  end
end
