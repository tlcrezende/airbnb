class Api::UsersByEmailsController < ApplicationController 
  def show 
    user = User.find_by(email: params[:email])

    render json: user
  rescue ActiveRecord::RecordNotFound => e 
    render json: { error: e.message }, status: :not_found
  end
end