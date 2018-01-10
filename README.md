# Project Title
FindCar is a utility to  help search cars online.

# Getting Started

FindCar displays car of week as a starting page. Car of the week is fetched from server deployed locally. can be searched based on make first and then model. Details of the car are displayed only after a model is selected. Selected make and model remains in the state.
Application is structured as frontend and backend.
Frontend is developed in React, Redux and React-thunk middleware. Webpack is used for bundle. Mocha as test runner and utilities from React used for testing.
Backend is created to expose microservices for data fetch. Backend supports CORS and developed using KOA framework using Typescript.

## Prerequisites

Node 8.6.0.
Ports 8888 for backend.

The port can be changed in server.ts file.

## Steps
### Backend

1.	git clone https://github.com/dhirajataws/react_qa_backend.git
2. cd react_qa_backend && npm install
3. yarn start.
use curl http://localhost/carofweek  to test the server.

