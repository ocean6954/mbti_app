class CreatePeople < ActiveRecord::Migration[7.1]
  def change
    create_table :people do |t|
      t.string :name
      t.integer :gender
      t.integer :mbti_types
      t.timestamps
    end
  end
end
