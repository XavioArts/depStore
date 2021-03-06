class CommentsController < ApplicationController

    before_action :set_item
    before_action :set_comment, only: [:show, :update, :edit, :destroy]

    def index
        render component: "Comments", props: { item: @item, comments: @item.comments }
    end

    def show
        render component: "Comment", props: {item: @item, comment: @comment}
    end

    def new
        render component: "CommentNew", props: { item: @item, comment: @comment }
    end

    def create
        ### Need to update to include error handling eventually
        ## and sanitize my params
        @item.comments.create(author: params[:comment][:author], body: params[:comment][:body])
        redirect_to dep_item_path(@item.dep_id, @item)
    end

    def edit 
        render component: "CommentEdit", props: { item: @item, comment: @comment }
    end

    def update
        @comment.update(author: params[:comment][:author], body: params[:comment][:body])
        redirect_to [@item,@comment]
    end

    def destroy
        @comment.destroy
        redirect_to [@item,@comment]
    end

    private

    def set_item
        @item = Item.find(params[:item_id])
    end

    def set_comment
        @comment = @item.comments.find(params[:id])
    end

end
