class Promotion < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  scope :visible, -> { where(visible: true) }
  scope :active, -> { where(["starts_at <= :start and ends_at > :end", { start: DateTime.now, end: DateTime.now }]) }
  scope :upcoming, -> { where(["starts_at > :start", { start: DateTime.now }]) }
  scope :past, -> { where(["ends_at <= :end", { end: DateTime.now }]) }
end
