NOTES ABOUT THE ORIGINAL CODEBASE
//The original code seemed to have a strange structure there was a passing down for children through several components
//eg App -> ProductsContainer -> ProductList -> ProductItem -> Product  
//This seemed superfluous to me so I have simplified it to App -> ProductsContainer -> ProductItem

//IF I HAD MORE TIME
//If I had more time I would work on the styling of the app to make it more visually appealing
//I would also work on the error handling of the API call
//I would write the functions to add and remove items from the cart in a more DRY way
//I would also write more tests for the app
//I would also add a button to clear the cart
//I would write the functionality to decrement the inventory for the products as they are added to the cart
//I would write the conditional statements to only offer the products if the inventory is greater than 0

//REDUX
//The REDUX element of this exercise was familiar to me as I have used it in a previous commercial codebase
//It reminded me of the massive amount of boilerplate code that is required to set up and manage redux store.
//Whilst it is very convenient to have a global store like REDUX so that data is available across the whole codebase
//maintaining all the code that goes along with Redux gives greater potential for bugs and makes the app harder to maintain
//REDUX toolkit does simplify the boilerplate code but it is still a lot of code to maintain
//In my personal projects I am learning about React Query which seems a much simpler way of managing global state
//React Context can also be useful to avoid prop drilling, but to many contexts can quickly bloat the codetree
//I decided to go ahead and write the app from scratch because I did this on my own time, and I enjoyed that more than interacting with REDUX.

//HOW I APPROACHED THE TASK
//I approached the task by looking briefly at the readme and code sandbox for 10mins before bed
//I then spent 3 hours on the task the next afternoon
//30 to 45 mins was spent in the codesandbox trying to figure out how to do the task with redux
//I then spent 2 hours writing the app from scratch
//initially it was slow as I tried to copy the structure of the original app
//Once I decided to simplify the structure it was much quicker to write the app
//Once the app was written doing the actual tasks was very quick - I spent 15 mins on the first task and 15 mins on the second task
//I then spent 15 mins writing this readme

//WHAT I LEARNED
//I do better just looking at what the finished output should be and then writing the code from scratch
//I am not a fan of the REDUX boilerplate code

// RESOURCES
//I have ESLINT, and GitHub Copilot installed in VSCode
//I have a few snippets installed in VSCode (eg rafce)
//I have an all-access subscription to Mosh Hamedanis courses
//I use Google, StackOverflow, MDN, and developer.mozilla.org for hints when I hit any snags
