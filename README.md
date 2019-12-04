# Gym Buddy 
(In Progress)

A full-stack mobile-first LAMP application with full CRUD functionality that allow users to look for the right gym for them and connect with other users.

## Technologies Used

1. HTML5
2. CSS3
3. JavaScript
4. React
5. PHP
6. MySQL
7. Google API
8. AWS EC2

## Live Demo

Try the application live at https://gym-buddy.aarondomingo.com

## Features

- User can sign up / create an account
- User can log in and view data based on their account
- User can add/remove/edit information in their account (stats, schedule, gym selected)
- User can upload a photo as their profile picture
- User can view gyms around their current location
- User can search for a specific location anywhere in the United States
- User can see all the gyms based on the location input in the order of distance
- User can see detailed information about the gym selected
- User can see other users that go that specific gym
- User can filter gym buddy user results based on their inputted stats
- User can add / remove another user from be their buddy list
- User can view all their messages in the order of time
- User can message other users

## Preview

![](/server/public/demo/gym-buddy.gif)

## Development

#### System Requirements

- NPM 6 or higher
- MySQL 7 or higher
- Google API Key

#### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/aaronmdomingo/gym-buddy.git
    cd gym-buddy
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Import the database to MySQL

    ```shell
    database/gym-buddy.sql
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
