class Promotion < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  scope :visible, -> { where(visible: true) }
  scope :active, -> { where(["starts_at <= :start and ends_at > :end", { start: DateTime.now, end: DateTime.now }]) }
end
