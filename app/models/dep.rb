class Dep < ApplicationRecord
    has_many :items, dependent: :destroy
    #the has many indentifies that the department owns multiple items
    # the dependent means that if you destory a dep the items that it owns will also be destroyed
end
