# class BlogPostsController < ApplicationController
#     # Create
#     post '/blog_posts' do
#       blog_post = BlogPost.create(params)
#       if blog_post.valid?
#         redirect "/blog_posts/#{blog_post.id}"
#       else
#         # Handle validation errors
#       end
#     end
  
#     # Read all
#     get '/blog_posts' do
#       @blog_posts = BlogPost.all
#       erb :'blog_posts/index'
#     end
  
#     # Read one
#     get '/blog_posts/:id' do
#       @blog_post = BlogPost.find(params[:id])
#       erb :'blog_posts/show'
#     end
  
#     # Update
#     patch '/blog_posts/:id' do
#       blog_post = BlogPost.find(params[:id])
#       blog_post.update(params)
#       if blog_post.valid?
#         redirect "/blog_posts/#{blog_post.id}"
#       else
#         # Handle validation errors
#       end
#     end
  
#     # Delete
#     delete '/blog_posts/:id' do
#       BlogPost.destroy(params[:id])
#       redirect '/blog_posts'
#     end
#   end
  