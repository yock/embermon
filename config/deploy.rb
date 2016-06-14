require 'mina/git'

set :domain, 'embermon.mikeyockey.com'
set :deploy_to, '/var/www/vhosts/embermon'
set :repository, 'git@github.com:yock/embermon.git'
set :branch, 'feat/fastboot'
set :forward_agent, true

set :shared_paths, %w(node_modules bower_components)

task :environment do
  # If you're using rbenv, use this to load the rbenv environment.
  # Be sure to commit your .ruby-version or .rbenv-version to your repository.
  # invoke :'rbenv:load'

  # For those using RVM, use this to load an RVM version@gemset.
  # invoke :'rvm:use[ruby-1.9.3-p125@default]'
end

task :install => :environment do
  queue 'npm install'
  queue 'bower install'
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  to :before_hook do
  end
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'install'
    queue 'ember build'
    invoke :'deploy:cleanup'

    to :launch do
    end
  end
end

# For help in making your deploy script, see the Mina documentation:
#
#  - http://nadarei.co/mina
#  - http://nadarei.co/mina/tasks
#  - http://nadarei.co/mina/settings
#  - http://nadarei.co/mina/helpers
