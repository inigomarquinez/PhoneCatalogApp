# Front-end Coding Challenge for Candidates

Phone Catalog App

Your task is to write a very simple product catalog app.

1. Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java…) that…

    - has 1 endpoint `/phones`
    - returns a couple of mobile phones like iPhone 7, Samsung Galaxy S7 etc. with some simple attributes like product image (just take some off of google images), title, description, color, price etc.
    - The data can all be mocked, no need for a persistence layer

2. Write a React app that displays the phones from the API

    - Use redux for state management and Axios(or similar library) for fetching data from the API
    - Create a `PhoneListContainer` component that shows the phones
    - Create a `PhoneDetailComponent` that shows a few more details about the phone when the user selects it
    - Display a spinner or placeholder component while the API request is ongoing
    - Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone.

3. Push the code to a public github repo with a README.md that explains how to run API & Frontend app

Bonus Points for Dockerizing the app.

Extra Bonus Points for writing realistic unit/end-to-end tests.
