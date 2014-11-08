class AddDonationAmountToPreLaunchUsers < ActiveRecord::Migration
  def change
  	add_column :pre_launch_users, :donation_amount, :string
  end
end
