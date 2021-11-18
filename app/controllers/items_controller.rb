class ItemsController < ApplicationController
    before_action :set_dep
    before_action :set_item, only: [:show, :update, :edit, :destroy]

    def index
        # show all items in a department
        render component: "Items", props: { dep: @dep, items: @dep.items }
    end

    def show
        render component: "Item", props: { dep: @dep, item: @item }
    end

    def new
        render component: "ItemNew", props: { dep: @dep, item: @item }
    end
    
    def create
        ### Need to update to include error handling eventually
        @dep.items.create(name: params[:item][:name], body: params[:item][:body])
        redirect_to [@dep,@item]
    end

    def edit
        render component: "ItemEdit", props: {dep: @dep, item: @item }
    end

    def update
        @item.update(name: params[:item][:name], body: params[:item][:body])
        redirect_to [@dep,@item]
    end

    def destroy
    end 

    private

    def set_dep
        @dep = Dep.find(params[:dep_id])
    end

    def set_item
        @item = @dep.items.find(params[:id])
    end

end
