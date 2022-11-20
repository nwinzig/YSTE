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
![Screenshot 2022-11-20 122628](https://user-images.githubusercontent.com/95613961/202924348-e266b571-f48a-497d-a80f-2b894c683f2d.jpg)

## Product Detail
- Here you can view Individual Products, see their description 
![Screenshot 2022-11-20 122744](https://user-images.githubusercontent.com/95613961/202924415-1a898800-0eb9-4e84-9c71-696f4c25d78d.jpg)
and reviews.

## Shopping Cart
- Here Each authenticated and logged in users can amass and view their favorite items from the site. Here the user can also remove items from the cart and will see the dynamic changes in quantity and price
![Screenshot 2022-11-20 122811](https://user-images.githubusercontent.com/95613961/202924421-fc794dec-443f-4694-8b36-99bfc7679796.jpg)

## SearchBar
- Here users can filter out products from the entire site and render out a personalized list of items that matched the user's search request.
![Screenshot 2022-11-20 122900](https://user-images.githubusercontent.com/95613961/202924424-67da7b6b-5a77-45ab-9b83-77f653034f00.jpg)



# Contact Us
- Caleb Flores [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>]('')[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>]('')
- Donovan Galloway [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Dogallow)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='' width=30px height=30px/>](https://www.linkedin.com/in/donovan-galloway-927190233/)
- Trevor Jones [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Trevor1798)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/trevor-jones-458b75202/)
- Noah Winzig [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/nwinzig)[<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/noah-winzig-30588b231/)




