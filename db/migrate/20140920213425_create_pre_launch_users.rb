class CreatePreLaunchUsers < ActiveRecord::Migration
  def change
    create_table :pre_launch_users do |t|
      t.string :name
      t.string :email
      t.timestamps
    end
  end
end
