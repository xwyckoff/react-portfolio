"use client"

import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';

export default function Portfolio() {
    const projects = [
        {"key": 1, "imgSrc": "https://www.picsum.photos/700/234", cardTitle:"TEST", cardDesc:"idk"},
        {"key": 2, "imgSrc": "https://www.picsum.photos/700/234", cardTitle:"TEST", cardDesc:"idk"},
        {"key": 3, "imgSrc": "https://www.picsum.photos/700/234", cardTitle:"TEST", cardDesc:"idk"},
        {"key": 4, "imgSrc": "https://www.picsum.photos/700/234", cardTitle:"TEST", cardDesc:"idk"}
    ]

    return (
        <main className='flex justify-center'>
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
                        <ProjectCard key={project.key} imgSrc={project.imgSrc} cardTitle={project.cardTitle} cardDesc={project.cardDesc}/>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}