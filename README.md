# Boss Machine
My total coding time to write the backend for this to-do list was about 30 hours. [Unit 4 in Codecademy's 'Build Your Own APIs'.]



## Routes Required

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.


For `/api/meetings` POST route, no request body is necessary, as meetings are generated automatically by the server upon request. Use the provided `createMeeting` function exported from **db.js** to create a new meeting object.

## Methods

The **server/db.js** file exports helper functions for working with the database arrays. This database is non-persistant and was written by the teachers at the school.

`getAllFromDatabase`:
- Takes only the single argument for model name. Returns the array of elements in the database or `null` if an invalid argument is supplied

`getFromDatabaseById`:
- Takes the model name argument and a second string argument representing the unique ID of the element. Returns the instance with valid inputs and `-1` with an invalid id.

`addToDatabase`:
- Takes the model name argument and a second argument which is an object with the key-value pairs of the new instance. `addToDatabase` handles assigning `.id` properties to the instances. It does not check to make sure that valid inputs are supplied, so you will have to add those checks to your routes if necessary. `addToDatabase` will return the newly-created instance from the database. This function will validate the schema of the instance to create and throw an error if it is invalid.

`updateInstanceInDatabase`:
- Takes the model name argument and a second argument which is an object representing an updated instance. The instance provided must have a valid `.id` property which will be used to match. `updateInstanceInDatabase` will return the updated instance in the database or `null` with invalid inputs. This function will validate the schema of the updated instance and throw an error if it is invalid.

`deleteFromDatabasebyId`:
- Takes the model name argument and a second string argument representing the unique ID of the element to delete. Returns `true` if the delete occurs properly and `false` if the element is not found.

`deleteAllFromDatabase`:
- Takes only the single argument for model name. Deletes all elements from the proper model and returns a new, empty array. You will only need to use this function for a /api/meetings route.

**Schemas**

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string

Note that many values that could be numbers are in fact strings. Since this is an outward facing API, we can't trust that data is always provided by a client. My code transforms between String and Number JavaScript types in order to provide full functionality in the API.

## Testing

A testing suite was  provided by Codecademy.  Directions:

`
>To run these tests, first open the root project directory in your terminal. Then 
> run `npm install` to install all necessary testing dependencies (you will only need to do 
> this step once).
> Finally, run `npm run test`. You will see a list of tests that ran with information
> about whether or not each test passed. After this list, you will see more specific output
> about why each failing test failed. While they are open in a terminal window, these tests will re-run every time you save server files. If you want to quit the testing loop, use `Ctrl + C`. If you only want to run the tests once, you can run the `mocha` command in the terminal from your project root directory.

> As you implement functionality, run the tests to ensure you are implementing your routes and middleware correctly. The tests will additionally help you identify edge cases that you may not have anticipated when first writing your routes. You should also test the functionality on the frontend to make sure that things are working as intended. Feel free to add logging middleware to your server, it will help with debugging!
`