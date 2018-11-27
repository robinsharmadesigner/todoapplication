<html>
<head>

<h1> To-do List Web Application </h1>


<h2>Objectives </h2>

A simple To Do list Web Application built in HTML, CSS and JavaScript.

1) A user can add a new todo item list with a new title.
2) A user can click on the '+' button to add a new todo item to that particular list.
3) A user can click on the to do item to mark it as completed and click again to mark as incomplete.
4) A user can click on the 'x' button to remove the todo item.
5) A user can click on the 'x' button to remove the complete to do list.

<b> API </b>

XMLHTTPRequest API is used to fetch data from locally stored JSON file asynchronously.
  
<b> WebPack </b>
  
 Webpack is a build tool to manage dependencies.
 We specify the entry file for webpack to work its way through the dependency. 
 Starting at index.js file, webpack will merge all the js files into one bundle file, here called main.js,
 which is used by the html file to implement the functionality.

<b> Ajax </b>

AJAX (Asynchronous JavaScript and XML) is a technique for communicating with a server and dynamically altering a page without leaving the page. 
It can be used to send as well as receive information in a variety of formats, including JSON, XML, HTML, and text files.
It is made possible with the XMLHttpRequest object, a built-in feature of your browser.

<b> JSON </b>

JSON (JavaScript Object Notation) is a standard way to provide machine readable data to and from web services.

<h3>Installation</h3>

1. Clone the repository:

   a) git clone https://github.com/robystark/todoapplication.git

2) Install the Dependencies using following commands:

  a) npm init
  b) npm install --save-dev wepback

3) Build the App using:

  a) npm run build
  
4) Open the html file to launch the application.
  

