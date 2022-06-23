# Cheat sheet

## How to commit changes

Once you're done and happy with your code, commit the changes into GitHub.

1. Click on the git tab
2. Write a commit message
3. Click on check mark
4. Sync changes
5. Celebrate 🎉

## How things are gonna work

### In the backend

In the terminal:

```
node backend-server.js
```

Seungwoo, Ken

Express servers have multiple routes: GET /, GET /cheat-sheet, POST /pantry, etc.
We need code it so that each route can be used to CREATE, READ, UPDATE, and DELETE data from our database (CRUD).
Each route will correspond to its own data:
GET /pantry/:id would send data about a specific pantry
POST /pantry lets you create a new pantry with certain data

We'll be using MongoDB ![https://www.mongodb.com/] as the database. We won't need to code a database ourselves,
we'll just use this.

### In the frontend

In the terminal:

```
npm run start
```

(Same thing as)

```
npx vite
```

Elizabeth, Raymond

A simple vite server serving the raw .html pages. No code is needed, just write .html pages and they'll be served by Vite.
The frontend will talk to the backend with HTTP to get and update data about the pantries.
