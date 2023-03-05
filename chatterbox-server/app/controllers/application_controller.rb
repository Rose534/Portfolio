class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/' do
      projects = Project.all
      projects.to_json
    end
    
    get '/projects' do
      projects = Project.all
      projects.to_json
    end

    post '/projects' do
      project = Project.create(title: params[:title], description: params[:description], image_url: params[:image_url])
      project.to_json
    end

    get '/projects/:id' do
      project = Project.find(params[:id])
      project.to_json
    end

    put '/projects/:id' do
      project = Project.find(params[:id])
      project.update(title: params[:title], description: params[:description], image_url: params[:image_url])
      project.to_json
    end

    get '/projects' do
      projects = Project.all
      projects.to_json
    end

    delete '/projects/:id' do
      project = Project.find(params[:id])
      project.destroy
      status 204 
    end
    
 

    end