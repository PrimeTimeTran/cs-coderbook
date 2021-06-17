# Coderbook

## Objectives

An example full stack web application.

- React
- Node
- Netlify
- Heroku

### Web/Admin > Server/API

The flow of data will be like the following when users are inserting data into our database.

`Input > Handler > Submit Handler > Action > REST API > Request > Controller > Handler > Database`

### Server/API > Web/Admin

The flow of data will be like the following when users are requesting data from our database.

`Database > Handler > Controller > REST API > Response >Action > Reducer > Component > User Interface`

### Requirements

#### User

- As a user I can register an account.
- As a user I can sign in after registering an account.
- As a user I'm redirected to a homepage after I've signed in.
- As a user I can see my account's profile on a profile page.
- As a user I update my profile on my profile page.

#### Post

- As a user I can create a post from my homepage.
- As a user I can view all my friends and I's post on the homepage.
- As a user I can create a post from my profile page.
- As a user I can view all my posts and the posts I've shared on my profile page.
- As a user I can update posts I've written/shared.
- As a user I can delete posts I've written/shared.

#### Comment

- As a user I can comment on a post.
- As a user I can view all the comments of a post.
- As a user I can see the number of comments on a post.
- As a user I can update a comment which I've made.
- As a user I can delete my comments on a post.

#### Reaction

- As a user I can react to a post.
- As a user I can view all the reactions on a post
- As a user I can see the number of reactions on a post.
- As a user I can delete my reactions on a post.

# FAQ

- yarn.lock must be checked into version control so Netlify can know to install yarn.
- ./admin/yarn.lock

# Client/Web

# Client/Admin


# Server/API/Heroku

