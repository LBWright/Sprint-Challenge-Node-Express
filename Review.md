# Review Questions

## What is Node.js?

> Node is a realtime run environment for javascript to be used outside the browser. It uses google Chrome's V8 engine to do this

## What is Express?

> Express is a library that sits on top of Node. Express is primarily concerned with establishing a server. It's very unopinionated and lightweight compared to other server libraries and other frameworks.

## Mention two parts of Express that you learned about this week.

> In Express, everything is a middleware. This gives you complete control over your routes. The Express API is extremely simple. You USE middleware, you GET get requests, you POST post request, you PUT put requests. It's incredibly intuitive

## What is Middleware?

> Middleware allows you do complete or accomplish some action before handling your request or sending it to the user

## What is a Resource?

> Data is a resource. Any data about a given item is a resource. We create API endpoints to access those resources.

## What can the API return to help clients know if a request was successful?

> A successful status. 200 is a general successful status. 201 is a successful post request.

## How can we partition our application into sub-applications?

> We can divide out our routes and export the router object. After that, we can include them into our index and use a middleware to utilize those routes.

## What is express.json() and why do we need it?
