class AboutSection < ApplicationRecord
  scope :visible, -> { where(visible: true) }
end
