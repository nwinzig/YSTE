# YSTE

YSTE is a website clone, insprired by [Etsy](https://www.etsy.com/?ref=lgo). YSTE is an online marketplace that hosts a wide range of products that are 'for sale'. YSTE also allows you to put some of your favorite products up 'for sale'. This site is best suited for people browsing the web that want to explore some products and have fun at the same time.

# Wiki
More Info about how the project came together:
- [Feature List](https://github.com/nwinzig/YSTE/wiki/Feature-List)

- [Database Schema](https://github.com/nwinzig/YSTE/wiki/Db-Schema)

- [User Stories](https://github.com/nwinzig/YSTE/wiki/User-Stories)

# Tech Stack
 - [<img src='https://img.shields.io/badge/-Javascript-yellow' alt='Javascript Logo'/>](https://www.javascript.com/)
 - [<img src='https://img.shields.io/badge/-React-blue' alt='React Logo'/>](https://reactjs.org/)
 - [<img src='https://img.shields.io/badge/-HTML5-orange' alt='HTML Logo'/>](https://html.com/)
 - [<img src='https://img.shields.io/badge/-CSS-blue'/>](https://www.w3.org/Style/CSS/Overview.en.html)
 

# Landing Page

You can access the wide variety of products right from the home page.

# Contact Us
- Caleb Flores [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>]('')[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>]('')
- Donovan Galloway [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Dogallow)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='' width=30px height=30px/>](https://www.linkedin.com/in/donovan-galloway-927190233/)
- Trevor Jones [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Trevor1798)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/trevor-jones-458b75202/)
- Noah Winzig [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/nwinzig)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/noah-winzig-30588b231/)



# Flask React Project



This is the starter for the Flask React project.

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## Deployment through Render.com

First, refer to your Render.com deployment articles for more detailed
instructions about getting started with [Render.com], creating a production
database, and deployment debugging tips.

From the [Dashboard], click on the "New +" button in the navigation bar, and
click on "Web Service" to create the application that will be deployed.

Look for the name of the application you want to deploy, and click the "Connect"
button to the right of the name.

Now, fill out the form to configure the build and start commands, as well as add
the environment variables to properly deploy the application.

### Part A: Configure the Start and Build Commands

Start by giving your application a name.

Leave the root directory field blank. By default, Render will run commands from
the root directory.

Make sure the Environment field is set set to "Python 3", the Region is set to
the location closest to you, and the Branch is set to "main".

Next, add your Build command. This is a script that should include everything
that needs to happen _before_ starting the server.

For your Flask project, enter the following command into the Build field, all in
one line:

```shell
# build command - enter all in one line
npm install --prefix react-app &&
npm run build --prefix react-app &&
pip install -r requirements.txt &&
pip install psycopg2 &&
flask db upgrade &&
flask seed all
```

This script will install dependencies for the frontend, and run the build
command in the __package.json__ file for the frontend, which builds the React
application. Then, it will install the dependencies needed for the Python
backend, and run the migration and seed files.

Now, add your start command in the Start field:

```shell
# start script
gunicorn app:app
```

### Part B: Add the Environment Variables

Click on the "Advanced" button at the bottom of the form to configure the
environment variables your application needs to access to run properly. In the
development environment, you have been securing these variables in the __.env__
file, which has been removed from source control. In this step, you will need to
input the keys and values for the environment variables you need for production
into the Render GUI.

Click on "Add Environment Variable" to start adding all of the variables you
need for the production environment.

Add the following keys and values in the Render GUI form:

- SECRET_KEY (click "Generate" to generate a secure secret for production)
- FLASK_ENV production
- FLASK_APP app
- SCHEMA (your unique schema name, in snake_case)
- REACT_APP_BASE_URL (use render.com url, located at top of page, similar to
  https://this-application-name.onrender.com)

In a new tab, navigate to your dashboard and click on your Postgres database
instance.

Add the following keys and values:

- DATABASE_URL (copy value from Internal Database URL field)

_Note: Add any other keys and values that may be present in your local __.env__
file. As you work to further develop your project, you may need to add more
environment variables to your local __.env__ file. Make sure you add these
environment variables to the Render GUI as well for the next deployment._

Next, choose "Yes" for the Auto-Deploy field. This will re-deploy your
application every time you push to main.

Now, you are finally ready to deploy! Click "Create Web Service" to deploy your
project. The deployment process will likely take about 10-15 minutes if
everything works as expected. You can monitor the logs to see your build and
start commands being executed, and see any errors in the build process.

When deployment is complete, open your deployed site and check to see if you
successfully deployed your Flask application to Render! You can find the URL for
your site just below the name of the Web Service at the top of the page.

[Render.com]: https://render.com/
[Dashboard]: https://dashboard.render.com/
