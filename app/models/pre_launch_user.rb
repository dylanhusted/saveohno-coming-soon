class PreLaunchUser < ActiveRecord::Base
	validates :name, presence: true
	validates :email, presence: true
	validates :donation_amount, presence: true
	validates :pledged, inclusion: [true]
end
