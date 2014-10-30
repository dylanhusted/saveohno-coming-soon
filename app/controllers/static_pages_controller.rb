class StaticPagesController < ApplicationController

  def home
	@pre_launch_user = PreLaunchUser.new
  end
end