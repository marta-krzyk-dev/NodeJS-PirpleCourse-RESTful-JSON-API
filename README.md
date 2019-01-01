# RESTful-Hello-API
This is a RESTful JSON API created as a homework Assignment #1 for</br>
https://pirple.thinkific.com/courses/the-nodejs-master-class

## How to run the project?
0. Download the project.
1. Open the command prompt (for Windows, click Start icon and type in 'cmd') 
2. In the command line, go to the project directory:</br>
<code>cd C:/HelloAPI</code>
3. Run the app:</br>
<code>node index.js</code></br>
Optionally, one can set the environment as command line argument (with value of 'production' or 'staging').</br>
By default it's 'staging'.</br>
<code>node index.js production</code>(for Windows)</br>
<code>NODE_ENV=production node index.js</code>(for Linux)
4. The app should inform which ports are active.</br>
![Starting the Hello app in console](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/console_commands.png?raw=true)
5. Open up a web browser or a tool like [Postman](https://www.getpostman.com/). Make a request to one of the active ports, eg. **localhost:3000/hello**. (where 3000 is one of the ports from point 4)</br>
![Hello route in web browser](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/hello_in_browser.png?raw=true)</br>
6. By default, the app responses with a greeting in Esperanto.</br>
Define **?lang=** query parameter to get a greeting in another language.</br>
![Hello in belarusian](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/hello_be_route.png?raw=true)
7. To list possible languages, make request to **localhost:3000/default**. Mispelled, non-existing or lack of route will also result in connecting to the **default route** that instructs how to use **hello route**.</br>
![Default handler](https://github.com/marta-krzyk-dev/NodeJS-PirpleCourse-RESTful-JSON-API/blob/master/Screenshots/default_route_in_web_browser.png?raw=true)

## Using HTTPS port
1. Make sure to include **https://** before hostname while using HTTPS port.
![Default handler on HTTPS port](https://github.com/marta-krzyk-dev/RESTful-Hello-API/blob/master/Screenshots/default_route_https.png?raw=true)
2. To make request via [Postman](https://www.getpostman.com/), turn off *SSL certificate verification* option in *Settings > General*.</br>
Possibly, you might also need to turn off both *Global Proxy* and *System Proxy* in *Settings > Proxy*.</br>
![Default handler on HTTPS port](https://github.com/marta-krzyk-dev/RESTful-Hello-API/blob/master/Screenshots/default_route_https2.png?raw=true)
