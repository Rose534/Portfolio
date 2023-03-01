class Project < ActiveRecord::Base
    has_many :blogposts
end