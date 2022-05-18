# Coding Quiz

## Description
This coding quiz is a demonstration of my understanding of Web API's and manipulating the DOM using JavaScript and HTML. The JavaScript files contain many fundemental JS methods including event listeners, timers, creating and appending HTML elements, etc.

Instead of creating a separate HTML document for each type of page on the app, I decided to create the homepage, quiz page, and score submission form on the same HTML document and change their CSS display property using functions in JavaScript. In hindsight, it might have be better for modularization to have them on separate files with JavaScript files containing only the necessary logic for each page.


## Challenges
A big challenge for me during this project was figuring out that the order of functions is so important. You can't append a `<li>` item to a `<ul>` before you add classes to it, and you can't declare a variable with the content of an input field before the user clicks the button with the event listener, because when the page loads the field is empty! These were just a few of the realizations I had while working through the quiz. By the end of the project I had a great understanding of these issues, and how they impact other areas of coding as well.

This was made during the beginning of my coding journey so I think I'll ramp up the difficulty in a future commit. For now it's five basic questions, but I hope you enjoy it!

## Images
Home Page
![homepage](https://user-images.githubusercontent.com/95831392/169171531-4b6f117f-d802-48c7-8426-1c8062004e7b.PNG)

Quiz Page
![quizpage](https://user-images.githubusercontent.com/95831392/169171573-df5a90a1-51a8-42f9-ad12-218ebb17c30e.PNG)

## Usage
The app is deployed to GitHub pages for your enjoyment. If you would like to fork or clone this repo please feel free.
