class CreateCorrectBlogPosts < ActiveRecord::Migration[6.1]
  
    def change
      add_column :blog_posts, :project_id, :bigint
      add_foreign_key :blog_posts, :projects
    
  end
end
