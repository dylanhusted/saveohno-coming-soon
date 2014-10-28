class StaticPagesController < ApplicationController
	  after_action :allow_iframe, only: :embed

  def embed
  end

  def home
	@pre_launch_user = PreLaunchUser.new
  end

private

  def allow_iframe
    response.headers.except! 'X-Frame-Options'
  end
end
