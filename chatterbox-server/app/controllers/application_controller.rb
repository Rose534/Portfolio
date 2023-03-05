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

    post '/blog_posts' do
      blog_post = BlogPost.create(params)
      if blog_post.valid?
        redirect "/blog_posts/#{blog_post.id}"
      else
       
      end
    end
  
    
    get '/blog_posts' do
      @blog_posts = BlogPost.all
      erb :'blog_posts/index'
    end
  
    
    get '/blog_posts/:id' do
      @blog_post = BlogPost.find(params[:id])
      erb :'blog_posts/show'
    end
  
  
    patch '/blog_posts/:id' do
      blog_post = BlogPost.find(params[:id])
      blog_post.update(params)
      if blog_post.valid?
        redirect "/blog_posts/#{blog_post.id}"
      else
        
      end
    end
  
    
    delete '/blog_posts/:id' do
      BlogPost.destroy(params[:id])
      redirect '/blog_posts'
    end
  
  
 

    end