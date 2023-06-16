import React from 'react';
import Card from '../Card';
import techBuildsImage from '../../images/TechBuilds-HomeScreen-Screenshot.png'


export default function Portfolio() {
    const techBuildsDesc = "A simple ecommerce website project that utilizes MySQL, SemanticUI, Sequelize, Handlebars, and Express to allow you to create accounts as well as add and remove items from your shopping cart."
    return (
        <div className="container">
            <h1 className="display-4 text-center">My Portfolio</h1>
            <div className="row justify-content-center">
                <div className="col-6">
                    <Card cardPic={techBuildsImage} cardTitle={"TechBuilds Ecommerce Website"} cardContent={techBuildsDesc} cardLink={"https://github.com/xwyckoff/BC-Project-Two"}/>
                </div>
                <div className="col-6">
                    <Card cardPic={"https://picsum.photos/300/150"} cardTitle={"test"} cardContent={"test"} cardLink={"https://www.google.com"}/>            
                </div>
            </div>
        </div>
    )
}