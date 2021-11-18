class DepsController < ApplicationController

    def index
        # Will show all departments and allow you to make new departments, view individual departments,
        # edit departments, and delete departments

        @deps = Dep.all
        # setting an instance variable to be all of my departments in my database

        render component: "Deps", props: { deps: @deps }
        #need to call and dislay the list of all departments (aka render)
    end

    def show
    end
    
    def new
    end

    def edit
    end

    def create
    end

    def update
    end

    def destroy
    end

end
