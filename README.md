# Simple React App with headless WordPress CMS

This is a simple react act, served up on a WordPress headless CMS. It was my first time developing with WP, and my first time using Docker. 


## Getting Started

Backend:
 - Install Docker if you haven't done so already
    - Mac: https://docs.docker.com/v17.09/docker-for-mac/install/
    - Windows: https://docs.docker.com/v17.09/docker-for-windows/install/

- Once installed start Docker Desktop
- From the command line run  `docker-machine start`
- Once your docker VM is running run `docker-compose up -d`
- Run `docker-compose start`

Frontend:
- Navigate to /10up-frontend `cd 10up-frontend`
- Install node_modules 
    - NPM: In the terminal run `npm install`
    - Yarn: In the terminal run `yarn`
 
 - Finally run `yarn start`

Once you have both the WordPress CMS running and the React application running open a browser and navigate to http://localhost:3000

Thank you for stopping by.
