class AddPledgeToPreLaunchUsers < ActiveRecord::Migration
  def change
  	add_column :pre_launch_users, :pledged, :boolean
  end
end
