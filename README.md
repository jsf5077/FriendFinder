# Friend Finder

Friend Finder is the state of the art application to help you find a new friend. You fill out a simple survey and this application will find you your best match based on who had the closest answers to yours. 

##Deployment

This application is deployed on Heroku.
link: 

## Home Page

As the client, you navigate this application through your browser. You will be taken to the home page where you will have the opportunity to click on the button that will take you to the survey, view the API friends list, or click on the link that will bring you to the github repo.

## Survey

On the survey page, you will be asked to enter your name and add a link to a photo of yourself. You'll also be presented with 10 questions in which you rate how you relate to each statement 1 (strongly disagree) - 5 (strongly agree). You will not be able to continue until all fields are completed. Once completed, the system goes through calculations and will give you a pop-up showing you your best match. The best match will display name and photo. 

## Server side. 

This application works with four different javascript applications.

* Server.js

   This script creates the connections necessary between scripts to make the application function. Express used

* Friends.js

    This script assumes the role of the database containing the friends array. 

* apiRoutes.js

    This script is crucial as this is the script that holds the algorithm to process the best match from the friends array to the users     input data.

* htmlRoutes.js

    This script handles the connections of the html pages 


## Built With

* [Heroku](https://code.visualstudio.com/)
* [Visual Studio Code](https://www.heroku.com/)

## Authors

* **Jeff Froehlich** - *Initial work* - [PurpleBooth](https://github.com/jsf5077)
