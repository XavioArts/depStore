# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Item.destroy_all 
# item must be detroyed first because you cant have an item that doesnt belong to a department

Dep.destroy_all
# make sure my database is clear before adding the fresh set of initial departments
# dont want clones of the same department being made each seed

foods = Dep.create(name:"Foods", aisle_no: 110)
toys = Dep.create(name:"Toys", aisle_no: 210)
elec = Dep.create(name:"Electronics", aisle_no: 310)
hardware = Dep.create(name:"Hardware", aisle_no: 10)
clothes = Dep.create(name:"Clothes", aisle_no: 50)
# creating my 5 basic departments
# and assigning them to a variable to make it easy to add items to each department

5.times do
    foods.items.create(
        name:,
        body:,
    )
end