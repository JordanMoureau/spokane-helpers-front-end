# CMS Project README

## Project Overview

A simple CMS designed for a local charity, aimed at boosting visibility and donations. The system allows admins to post news updates with images and, in future iterations, manage resource listings for people in need.

## Current Status: MVP

- Editable news feed with text and images.
- Admin dashboard for creating, editing, and deleting posts.
- Fully functional content management system using React (frontend) & Rails (backend).

## In Progress

- Editable resource listings to help individuals find assistance.
- SEO optimization for better search visibility.
- Functional forms for user engagement.
- Social media feed integration to amplify reach.

## Tech Stack

- Frontend: React (Create React App), Tailwind CSS
- Backend: Ruby on Rails, PostgreSQL, JWT Authentication
- Deployment: Heroku (backend), Netlify (frontend)

## Installation & Setup

### Backend (Rails API)

```sh
# Clone the repo
git clone <repo-url>
cd backend

# Install dependencies
bundle install

# Setup database
rails db:create db:migrate db:seed

# Start the Rails server
rails s
```

### Frontend (React App - Create React App)

```sh
# Navigate to the frontend folder
cd frontend

# Install dependencies
yarn install OR npm install

# Start the development server
yarn start OR npm start
```

## Key Features

- News Posting System: Admins can create, edit, and delete news posts with images.
- Simple, clean UI: Optimized for ease of use.
- Full CRUD functionality: Built with Rails API and React.
- JWT Authentication: Secure login for admin users.

## Challenges & Lessons Learned

### State Management Complexity

Initially, state was being passed in too many different directions, leading to unnecessary re-renders and complexity. We streamlined prop drilling and introduced state lifting to make data flow more predictable.

### CRUD Performance with Rails API

Ensuring seamless CRUD operations while preventing unnecessary API calls required careful handling of optimistic UI updates and fetch strategies.

## Next Steps

- Deploy backend to Heroku
- Deploy frontend to Netlify
- Enhance SEO and add analytics
- Implement authentication for admin users
- Expand content features

## Contributors

Jordan Moureau - [Website](https://jordanmoureau.com)
