class ProjectsController < ApplicationController
    # Create
    post '/projects' do
      project = Project.create(params)
      if project.valid?
        redirect "/projects/#{project.id}"
      else
        # Handle validation errors
      end
    end
  
    # Read all
    get '/projects' do
      @projects = Project.all
      erb :'projects/index'
    end
  
    # Read one
    get '/projects/:id' do
      @project = Project.find(params[:id])
      erb :'projects/show'
    end
  
    # Update
    patch '/projects/:id' do
      project = Project.find(params[:id])
      project.update(params)
      if project.valid?
        redirect "/projects/#{project.id}"
      else
        # Handle validation errors
      end
    end
  
    # Delete
    delete '/projects/:id' do
      Project.destroy(params[:id])
      redirect '/projects'
    end
  end
  