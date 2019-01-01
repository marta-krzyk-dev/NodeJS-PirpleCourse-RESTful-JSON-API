# NodeJS-PirpleCourse-RESTful-JSON-API
Homework Assignment #1 for
https://pirple.thinkific.com/courses/the-nodejs-master-class

## How to run the project?
1. Open the command prompt (for Windows, click Start icon and type in 'cmd') 
2. In the command line, go to the project directory:</br>
<code>cd C:/Documents/Projects/NodeJS-PirpleCourse-RESTful-JSON-API</code>
3. Run the app:</br>
<code>node index.js</code>

Optionally, one can set the environment as command line argument (value is 'production' or 'staging').
By default it's 'staging'.

<code>node index.js production</code>(for Windows)</br>
<code>NODE_ENV=production node index.js</code>(for Linux)

4. The app should inform which ports are in listening mode.
![Starting the Hello app in console](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/console_commands.png?raw=true)

5. Open up a web browser or a tool like Postman app. Make a request to the localhost:3000/hello route, where 3000 is the number of port from previous point.
![Hello route in web browser](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/hello_in_browser.png?raw=true)

By default, the app responses with a greeting in Esperanto.
Define lang query parameter to get a greeting in another language.
![Hello in belarusian](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/hello_be_route.png?raw=true)

6. Mispelled or non-existing routes will result in connecting to the **default route** that instructs how to use **hello route**.
![Default handler](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/default_route_in_web_browser.png?raw=true)
