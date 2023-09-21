"use client"

import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';

export default function Portfolio() {
    const projects = [
        {"key": 1, "link": "", "imgSrc": "/assets/TechBuilds-HomeScreen-Screenshot.png", cardTitle:"TechBuilds Ecommerce Website", cardDesc:"A simple ecommerce website that utilizes MySql, SemanticUI, Sequelize, Handlebars, and Express to allow you to create accounts as well as add and remove items from your shopping cart."},
        {"key": 2, "link": "", "imgSrc": "/assets/OIODev-screenshot.png", cardTitle:"OIODev", cardDesc:"A full-stack web application that allows freelance developers to market their services. Users can browse portfolios, create an account, and book a consult with developers."},
        {"key": 3, "link": "", "imgSrc": "/assets/BookAndMovieSearch-screenshot.jpeg", cardTitle:"Movie and Book Search", cardDesc:"An application that allows users to search for their favorite book or movie and add it to a list. Utilizes the OMDB and OpenLibrary APIs as well as LocalStorage for keeping track of the user's lists."},
        {"key": 4, "link": "", "imgSrc": "/assets/weatherApp-screenshot.png", cardTitle:"Weather Dashboard", cardDesc:"A weather application that displays the current weather and a 5 day forecast for the city that is searched. Utilizes LocalStorage to keep track of the user's search history and OpenWeatherMap API for fetching the weather data."}
    ]

    return (
        <main className='flex justify-center p-8'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10'>
                {projects.map((project, i) => (
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            opacity: 0,
                            y: 100
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: i * .2
                            }
                        }
                    }}>
                        <ProjectCard key={project.key} imgSrc={project.imgSrc} cardTitle={project.cardTitle} cardDesc={project.cardDesc} link={project.link}/>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}