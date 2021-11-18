class DepsController < ApplicationController

    before_action :set_dep, only:[:show, :update, :edit, :destroy]
    # make sure to get the current department before executing these actions

    def index
        # Will show all departments and allow you to make new departments, view individual departments,
        # edit departments, and delete departments

        @deps = Dep.all
        # setting an instance variable to be all of my departments in my database

        render component: "Deps", props: { deps: @deps }
        #need to call and dislay the list of all departments (aka render)
    end

    def show
        render component: "Dep", props: { dep: @dep, items: @dep.items }
        # this will go to my js that will display all department info and links
        
        ### need to choose one (dep or items) and combine them for my show so it isnt redundant
    end
    
    def new
        render component: "DepsNew"
        # this will bring up a form to input new department 
        
    end

    def edit
        render component: "DepEdit", props: { dep: @dep }
        # this component will bring up a form for changing the selected department
        ## need to do
    end

    def create
        ### Need to update to include error handling eventually
        # once the form is filled out you get the params and set them to a new department
        Dep.create(name: params[:dep][:name], aisle_no: params[:dep][:aisle_no])
        # I want to return to the home page to see the new department in my list of all of them
        redirect_to deps_path
    end

    def update
        @dep.update(name: params[:dep][:name], aisle_no: params[:dep][:aisle_no])
        # this will change the selected dep with the input params from the form in edit
        redirect_to dep_path
        # I want to redirect back to that user to view my changes
    end

    def destroy
        @dep.destroy
        redirect_to deps_path
        # actually destroy the input user and send you back to the home
    end

    private
    def set_dep
        @dep = Dep.find(params[:id])
        # any function that needs to use the specific user (aka show, update, edit, and destroy)
        # can call this instance variable
    end

end
