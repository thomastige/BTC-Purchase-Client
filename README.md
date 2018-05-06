# BTC-Purchase-Client
## Intro

The purpose of the application is to retrieve data from a public API to retrieve the latest price of one Bitcoin and to implement a front-end client that would allow to perform a simple USD to BTC trade based on that price. The user account is preloaded with an arbitrary amount.

This is a front-end application written in React as an exercise. A design mock-up was provided, and the goal was to reimplement it as closely as possible. This project was written from scratch without any project generator or component library. 

This was also used as a learning exercise as a first exposure to Redux, React, Jester and Enzyme.

## Getting Started
Clone this repo, then run ```npm install```  followed by ```npm start```. The application will run on port 8080.

## Design

As the mock-up this exercise was based on was very simple and abstract of actual requirements, some liberties were taken. 

 - The client will not let the user spend more than what is available as an account balance.
 - It is possible to sell BTC by inputting a negative value in the client.
 - Clicking on the "Trade" button will perform the operation and empty the USD text input.
 - While the BTC exchange rate is being retrieved and calculated, the USD text input is disabled and will display a message indicating that it is fetching the data.
 - Writing text in the USD input sets the BTC input value to NaN (Not A Number), and triggering a trade will not perform any operation.

## Testing
Jest and Enzyme were used as testing libraries. Each component is snapshot tested, and mapping tests are performed at the App level as well as at the individual levels for the wallet component and the BTC reader component. The tests can be run with the command ```npm test```.
