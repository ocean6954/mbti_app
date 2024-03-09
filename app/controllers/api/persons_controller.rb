class Api::PersonsController < ApplicationController
  before_action :set_person, only: %i[show update destroy]

  def index
    @persons = Person.all
    render json: @persons
  end

  def show
    render json: @person
  end

  def create
    @person = Person.new(person_params)

    if @person.save
      render json: @person, status: :created
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def update
    if @person.update(person_params)
      render json: @person, status: :ok
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @person.destroy
  end

  private

  def set_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(
      :id,
      :name,
      :mbti_types,
      :gender,
      :created_at,
      :updated_at
    )
  end
end
