namespace :db do
  desc "Check if database connection exists"
  task exists: :environment do
    Rake::Task["environment"].invoke
    ActiveRecord::Base.connection
  rescue
    exit 1
  else
    exit 0
  end
end