# Welcome to Nomadr !!

## Challenges

    - The put route was hands down the most difficult route to build for this project. I had a lot of trouble with retrieving the user input information to auto-populate the edit form as well as getting state to persist, I kept losing state on refresh as well as losing the updated information. My solutions to these two problems were 1. to use Optional Chaining (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to keep state on refresh and as for the edit form, 2. I was able to use localStorage to grab the input values saved and have them populate the inputs on the edit form.

    - Another challenge I faced was the post route. I kept running into losing state issues again and my route paths were crossed. All in all it was a mess until I started to figure out where the bugs were coming from by doing some console.log tracing AKA good ol' debugging from the backend to the frontend routes.




### Home Page


![Nomadr - get out there! - Google Chrome 1_13_2022 4_17_51 PM](https://user-images.githubusercontent.com/80717932/149411212-7dae2e3b-6d09-42df-be15-1d1d6640e597.png)

### Nearby Van Listings


![Nomadr - get out there! - Google Chrome 1_13_2022 4_21_29 PM](https://user-images.githubusercontent.com/80717932/149411140-9e532ead-a1ce-470f-8be8-3f84a50c5dc2.png)

### Host a Van Form


![Nomadr - get out there! - Google Chrome 1_13_2022 4_25_10 PM](https://user-images.githubusercontent.com/80717932/149411501-8dbd1aa9-a661-4ad9-a0c3-a2db4d242e7d.png)

### Edit a Van Form


![Nomadr - get out there! - Google Chrome 1_13_2022 4_26_28 PM](https://user-images.githubusercontent.com/80717932/149411627-d597d8f4-53bf-467f-89fa-84cb77cdfd1a.png)


### Log in


![Nomadr - get out there! - Google Chrome 1_13_2022 4_28_16 PM](https://user-images.githubusercontent.com/80717932/149411872-bbf3f178-82c5-46b5-8e9a-a8dfb1c86337.png)

### Sign up


![Nomadr - get out there! - Google Chrome 1_13_2022 4_29_58 PM](https://user-images.githubusercontent.com/80717932/149412055-d52d1087-e64d-4fdf-8b4b-685dd46016bf.png)

### Database Schema


![Nomadr](https://user-images.githubusercontent.com/80717932/149410484-88cb8c9a-db3a-4d02-b401-ab6cc9e6e39f.png)


## Features

- Sign up/Log in and demo user login
- Van listings to view a collection of vans nearby
- Host and edit your vans that you post available to rent
- Under construction.....


## Installation

  1. Clone the repository ```git clone git@github.com:DevDre783/Nomadr-AirBnB-Clone.git```
  2. Install necessary dependencies for node.js ```npm install```
  3. Create a database called `auth_db`
  4. Set password as 'password' or any password. *Note: make sure it is the same password as the one in the .env file variables*
  5. Create a new env file with the appropriate settings.
  6. Run migrations and seed data: ` npx dotenv sequelize db:migrate ` && `npx dotenv sequelize db:seed:all `
  7. Start both the backend and frontend server: cd into each folder and run `npm start`

## Techologies Used

- JavaScript
- Express
- Git
- React
- CSS
- Redux
- Heroku
- Sequelize
- PostgreSQL

## Documentation Links
- [Database Schema](https://github.com/DevDre783/Nomadr-AirBnB-Clone/wiki/Database-Schema)
- [MVP Feature List](https://github.com/DevDre783/Nomadr-AirBnB-Clone/wiki/MVP-List)

## Contributors

- [Andres Soca](https://github.com/DevDre783)


<!-- [Welcome]: ./public/images/
[Listings]: ./public/images/
[Van Details]: ./public/images/
[Host Form]: ./public/images/
[Edit Form]: ./public/images/ -->
