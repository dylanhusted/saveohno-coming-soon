class PreLaunchUsersController < ApplicationController
  def new
    @pre_launch_user = PreLaunchUser.new
    render :layout => false
  end

  def create
	@pre_launch_user = PreLaunchUser.new(pre_launch_user_params)
	if @pre_launch_user.save 
	  render 'signup_success'
	else
	  render 'signup_failure'
	end
  end

  def signup_success
  end

	private
	  def pre_launch_user_params
	  	params.require(:pre_launch_user).permit(:name, :email, :donation_amount)
	  end
end
