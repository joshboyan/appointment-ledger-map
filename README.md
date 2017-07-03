This is a progressive web app built using React, Node, Express and MongoDB(MERN stack). It is a beefed up todo list that you can use to schedule appointments, check a map and directions to the appointment and find out when you have to leave using a variety of travel modes. 

The app is styled with Bootstrap and features include: 
- search box fo filtering entries
- date picker
- time picker
- location autocomplete inputs
- geolocation to find appointment trip starting point
- Google Maps showing the route
- directions to the appointment 
- editable appointment listings

To accomplish this I integrate Google maps and services React components as well as the geolocation browser API and momentjs to manipulate times. The initial page load is redered on the server to improve the speed of the first page load. The app speeds up subsequent visits and offers offline functionality using the service-worker web API and IndexedDB for local storage. 

Unit tests are written using the Jest framework and Travis CI for continuous integration to Heroku. User activites are tracked using Google analytics events. Accessiblity audits were completed using SiteImprove and overall audits using Lighthouse.

[View Kanban board I used to manage the project](https://github.com/joshboyan/appointment-ledger-map/projects)

[View Project](https://appointment-ledger-map.herokuapp.com/)
