# Backend

## server

The server is listening on the index, but all the routes and libraries used are in server.js

## Routes

/user routes are everything for logging in, registering, and getting all users. The register route will hash a password. The login route will give you a token when you login that will be verified throughout your time on the website with a restricted middleware called "tokenverify"

/screenings routes:

/country

- This will be getting all countries and adding a country

/country/:id

- This will be for getting a specific country

/country/:id/communities

- This will be getting you all the communities from a specific country

/communities/:id

- This will get you a specific community (we didn't actually need this)

/communities/:id/kids

- This will get all kids from a specifc community and also add a kid to a community as well

/kids/:id

- This will get a specific kid and allow you to delete a kid if you want (only admins can)

## restricted middleware

There are 3 resricted middlewares. You can use them depending on how you want the site to operate. Token vefify which verifies if people have a token after they login, if they don't they aren't allowed to access anything. The admin verify is because admins only have certain access like editing a user or getting a list of users. We need to verify that they are an admin first. The last one is userCountryVerify which is allows only certain users access if their country_id matches the country id they are trying to add to.

## How the objects will be sent and recieved (all are an array of objects) Ex: [{ country: ''}]

country:
{country: string}

community:
{name: string, country_id: foreign key from country}

kids:
{
"community_id": foreign key from country,
"country_id": foreign key from country,
"child_name": string,
"parent_name": string,
"contact_info": string,
"date_of_screening": string,
"date_of_birth": string,
"gender": string,
"height": integer,
"weight": integer
}

users:
{username: string, password: string, admin: boolean (1 for true, 0 is false) user_country_id: foriegn key from country}
