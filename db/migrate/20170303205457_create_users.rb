class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
		t.references :messages, index: true
		t.string :username
		
      	t.timestamps
    end
  end
end
