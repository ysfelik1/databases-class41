
# Exercise 1

1. What columns violate 1NF?
food_description and food_code columns have multiple values.
2. What entities do you recognize that could be extracted?
We do not need dinner_id,member_id,food_code and venue_code

Because we should use these entities in other tables like that;
 
-member_id should be in Members table
-dinner_id should be in Dinners table
-food_code should be in Foods table
-venue_code should be in Venues table

3. Name all the tables and columns that would make a 3NF compliant solution.

Members
-member_id
-member_name

Dinners
-dinner_id
-dinner_date
-member_id
-location
-dinner_food_id

Foods
-food_id
-food_name

Venues
-venue_id
-venue_name

DinnerFoods
-dinner_food_id
-dinner_id
-food_id
