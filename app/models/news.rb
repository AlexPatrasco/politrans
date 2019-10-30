class News < ApplicationRecord
  extend FriendlyId
  friendly_id :timestamped_title, use: :slugged

  scope :visible, -> { where(visible: true) }

  def timestamped_title
    "#{Date.today.to_s} #{title}"
  end
end
