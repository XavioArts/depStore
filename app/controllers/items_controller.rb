class ItemsController < ApplicationController
    before_action :set_dep
    before_action :set_item, only: [:show, :update, :edit, :destroy]

    def index
        # show all items in a department
        render component: "Items", props: { dep: @dep, items: @dep.items }
    end

    


    private

    def set_dep
        @dep = Dep.find(params[:dep_id])
    end

    def set_item
        @item = @dep.items.find(params[:id])
    end

end
