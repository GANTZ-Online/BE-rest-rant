# Project REST-Rant

Part 1: Project setup, stub three routes, and creating a README file

REST-Rant is an app where users can review restaurants.



Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view

    Part A. User Story ( Fill in the blanks!)
       User stories are most often phrased as: Fill in the blanks! User stories are most often phrased as: "As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"

      As a "customer" I need to be able to "make a selection and add food to my cart in order to create an order", I need to "be able to add, and complete my purchase, track and trace my order' until its completion and delivery. 


    Part B. Draw some wireframes - On paper 

    Part C. Choose a color scheme, it should include at least 3 colors, Primary, Seondary and a highlight color
        Primary Color: #F6F4D2
        Secondary Color: #CBDFBD
        Highlighter Color: D4E09B

    Part D. Put the routes in the table below into your markdown in table format. Hint: You will need to look up how to make tables in markdown!

| METHOD |           PATH           |                     PURPOSE                      |
|:------:|:------------------------:|:------------------------------------------------:|
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   | (edited)


    Part E. Document the data we'll be storing for places (restaurants). You can choose whether to do this in a list, table, or other format.
Your places should have a name (string), city (string), state (string), cuisines (string) and a pic (string)


+------------------+---------+
| Field            | Type    |
+------------------+---------+
| _id              | ObjectID|
| name             | String  |
| city             | String  |
| state            | String  |
| cuisines         | String  |
| pic              | String  |
| rants            |         |
+------------------+---------+

+------------------+-------------+
| Field            | Type        |
+------------------+-------------+
| _id              | ObjectID    |
| place_id         | ref(places) |
| rant             | Boolean     |
| rating           | Number      |
| comment          | String      |
| reviewer         | String      |
+------------------+-------------+
