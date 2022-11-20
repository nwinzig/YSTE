# YSTE

YSTE is a website clone, insprired by [Etsy](https://www.etsy.com/?ref=lgo). YSTE is an online marketplace that hosts a wide range of products that are 'for sale'. YSTE also allows you to put some of your favorite products up 'for sale'. This site is best suited for people browsing the web that want to explore some products and have fun at the same time.

# Wiki
More Info about how the project came together:
- [Feature List](https://github.com/nwinzig/YSTE/wiki/Feature-List)

- [Database Schema](https://github.com/nwinzig/YSTE/wiki/Db-Schema)

- [User Stories](https://github.com/nwinzig/YSTE/wiki/User-Stories)

# Tech Stack
 - [<img src='https://img.shields.io/badge/-flask-yellow' alt='Javascript Logo'  target='_blank'/>](https://flask.palletsprojects.com/en/2.2.x/)
 - [<img src='https://img.shields.io/badge/-React-blue' alt='React Logo' target='_blank'/>](https://reactjs.org/)
 - [<img src='https://img.shields.io/badge/-HTML5-orange' alt='HTML Logo' target='_blank'/>](https://html.com/)
 - [<img src='https://img.shields.io/badge/-CSS-blue' target='_blank'/>](https://www.w3.org/Style/CSS/Overview.en.html)
 - [<img src='https://img.shields.io/badge/-postgres-lightgrey' target='_blank'/>](https://www.postgresql.org/)
 - [<img src='https://img.shields.io/badge/-render-purple' target='_blank'/>](https://render.com/)
 
 # Getting Started
 
 Directions to run on your local machine:
 
 1. Clone the repo
 - SSH Version:
 ``` 
 git clone git@github.com:nwinzig/YSTE.git
 ```
 or
 -HTTPS Version:
 ```
 git clone https://github.com/nwinzig/YSTE.git
 ```
 2. Install Packages:
 ```
 pipenv install
cd react-app
npm install
 ```
 3. Create a .env file and set the environment variables for SECRET_KEY and DATABASE_URL to your choosing.
 4. Migrate and seed the files.
 ```
 flask run db init
flask run migrate
flask seed all
 ```
 5. Run the server and start the react app
 ```
 pipenv run flask run
cd react-app
npm start
 ```
 
# Usage
## Landing Page

- You can access the wide variety of products right from the home page.

## Product Detail
- Here you can view Individual Products, see their description and reviews.

## Shopping Cart
- Here Each authenticated and logged in users can amass and view their favorite items from the site. Here the user can also remove items from the cart and will see the dynamic changes in quantity and price

## SearchBar
- Here users can filter out products from the entire site and render out a personalized list of items that matched the user's search request.



# Contact Us
- Caleb Flores [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](''){:target="_blank"}[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](''){:target="_blank"}
- Donovan Galloway [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Dogallow){:target="_blank"}[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='' width=30px height=30px/>](https://www.linkedin.com/in/donovan-galloway-927190233/){:target="_blank"}
- Trevor Jones [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Trevor1798){:target="_blank"}[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/trevor-jones-458b75202/){:target="_blank"}
- Noah Winzig [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/nwinzig){:target="_blank"}[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/noah-winzig-30588b231/){:target="_blank"}




