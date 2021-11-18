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
    name1 = Faker::Name.name
    name2 = Faker::Verb.ing_form
    name3 = Faker::Food.dish
    item_name = "#{name1}'s #{name2} #{name3}"
    foods.items.create(
        name: item_name,
        body: Faker::Food.description,
    )
end

5.times do
    name1 = Faker::Color.color_name
    name2 = Faker::Verb.ing_form
    name3 = Faker::Music.instrument
    item_name = "#{name1} #{name2} #{name3}"
    toys.items.create(
        name: item_name,
        body: Faker::Marketing.buzzwords,
    )
end

5.times do
    elec.items.create(
        name: Faker::Commerce.product_name,
        body: Faker::Marketing.buzzwords,
    )
end

5.times do
    name1 = Faker::Verb.ing_form
    name2 = Faker::House.furniture
    item_name = "#{name1} #{name2}"
    hardware.items.create(
        name: item_name,
        body: Faker::ChuckNorris.fact,
    )
end

5.times do
    name1 = Faker::Color.color_name
    name2 = Faker::Hipster.words(number: 2)
    item_name = "#{name1} #{name2}"
    clothes.items.create(
        name: item_name,
        body: Faker::Marketing.buzzwords,
    )
end