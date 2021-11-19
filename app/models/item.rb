class Item < ApplicationRecord
  belongs_to :dep

  has_many :comments, dependent: :destroy

end
