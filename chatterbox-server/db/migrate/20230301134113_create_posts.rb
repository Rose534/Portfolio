class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    def change
      create_table :blog_posts do |t|
        t.string :title
  
        t.timestamps
      end
  end
end
