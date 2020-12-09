**How to run locally**

In root: 

`npm start` or `npm run start:dev` to run with nodemon

then

`cd client`
`npm start`

**Live Demo**

https://cakecrudchallenge.herokuapp.com/

**Tech Stack**

node.js, express, SQLite, React, React Router

**Assumptions**

- A user gets the image url from google images -> Copy Link Address.
- Any user should be able to delete any cake in the database (as no user auth required).
- The data should persist if the server stops/falls over (which it does).
- The website should look good on all screen sizes from phone through to desktop.

**Features**

- List of all the cakes in the database
- Click on a cake to be taken to detailed info for that cake
- Delete a cake from the specific cakes page, will show error if this fails
- Click on add new cake to be taken to a form to input a new cake
- You can only submit the form when all values have been filled out (as they are 
all required fields)
- You can go back to home at any time (whether on error component, new cake component etc)
- All cake data is stored in SQLite, which is used in the node.js/express backend 
- If any call to the server fails, then the app responds in some way, usually by
showing the user some kind of error (e.g. user goes to a non existent cake, post/delete 
fails etc).
- The node.js server always returns a json response with an status code.
- Uses React Router to server different components, whilst still remaining a SPA.






