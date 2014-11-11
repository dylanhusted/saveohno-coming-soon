class PreLaunchUsersController < ApplicationController
  def new
    @pre_launch_user = PreLaunchUser.new
    render :layout => false
  end

  def pledge
    @pre_launch_user = PreLaunchUser.new
    render :layout => false
  end

  def signup_failure
  	@pre_launch_user = PreLaunchUser.new
  	render :layout => false
  end

  def signup_success
  	render :layout => false
  end

  def create
	@pre_launch_user = PreLaunchUser.new(pre_launch_user_params)
	if @pre_launch_user.save 
	  redirect_to success_path
	else
	  redirect_to failure_path
	end
  end

	private
	  def pre_launch_user_params
	  	params.require(:pre_launch_user).permit(:name, :email, :donation_amount, :pledged)
	  end
end
