import React from 'react';
import Card from '../Card';
import techBuildsImage from '../../images/TechBuilds-HomeScreen-Screenshot.png';
import socialNetworkImage from '../../images/markus-spiske-cvBBO4PzWPg-unsplash.jpg';
import weatherAppImage from '../../images/Screenshot 2023-03-08 001631.png';
import movieAndBookImage from '../../images/225067256-18da2d18-2e14-4c9a-86d9-16cfa67c8d00.jpeg';


export default function Portfolio() {
    const techBuildsDesc = "A simple ecommerce website project that utilizes MySQL, SemanticUI, Sequelize, Handlebars, and Express to allow you to create accounts as well as add and remove items from your shopping cart."
    const socialNetworkDesc = "A Node.js application that utilized MongoDB and the Mongoose library to perform functions on a database for a social network. This includes functions like creating and removing users, adding and removing friends, creating and removing posts, and adding reactions to those posts."
    const weatherAppDesc = "A weather application that displays the current weather and a 5 day forcast for the city that is searched. Utilizes the OpenWeatherMap API."
    const movieAndBookDesc = "An application that allows users to search for their favorite book or movie and add it to a list. Utilizes the OMDB and OpenLibrary APIs as well as LocalStorage for keeping track of the user's lists."
    
    return (
        <div className="container">
            <h1 className="display-4 text-center">My Portfolio</h1>
            <div className="row justify-content-center">
                <div className="col-6">
                    <Card cardPic={techBuildsImage} cardTitle={"TechBuilds Ecommerce Website"} cardContent={techBuildsDesc} cardLink={"https://github.com/xwyckoff/BC-Project-Two"}/>
                    <Card cardPic={weatherAppImage} cardTitle={"Weather Application"} cardContent={weatherAppDesc} cardLink={"https://github.com/xwyckoff/weather-dashboard"}/>
                </div>
                <div className="col-6">
                    <Card cardPic={socialNetworkImage} cardTitle={"Social Network API"} cardContent={socialNetworkDesc} cardLink={"https://github.com/xwyckoff/social-network-API"}/>
                    <Card cardPic={movieAndBookImage} cardTitle={"Movie and Book Search"} cardContent={movieAndBookDesc} cardLink={"https://github.com/CodeByDex/BC-Project-One"}/>          
                </div>

            </div>
        </div>
    )
}