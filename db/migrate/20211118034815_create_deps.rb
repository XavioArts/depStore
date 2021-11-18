class CreateDeps < ActiveRecord::Migration[6.1]
  def change
    create_table :deps do |t|
      t.string :name
      t.integer :aisle_no

      t.timestamps
    end
  end
end
