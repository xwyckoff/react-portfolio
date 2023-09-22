"use client"
import { motion } from 'framer-motion';
import Link from 'next/link'

export default function ProjectCard(props) {
    return (
        <div className='flex justify-center'>
            <motion.div className="--portfolio-card xl:max-w-3xl sm:w-full sm:m-10 xl:m-0 rounded overflow-hidden shadow-lg bg-brand-secondary backdrop-blur-md bg-opacity-50">
                <div className='--card-image-container relative'>
                    <img
                        className='--card-image w-full block'
                        src={props.imgSrc}
                    />

                    <motion.div className='--image-overlay flex absolute text-center bottom-0 bg-white w-full h-full items-center justify-center bg-opacity-10 opacity-0 backdrop-blur-sm' whileHover={{opacity: 1, y: 0}}>
                        <button className='--overlay-button transition duration-300 text-3xl hover:bg-brand-primary font-bold text-brand-primary rounded-md p-3 border-4 border-brand-primary hover:text-white'><Link href={props.link}>Check it out!</Link></button>
                    </motion.div>
                </div>
                <div className="--card-body p-3">
                    <div className='--card-title font-bold text-xl mb-2'>{props.cardTitle}</div>
                    <p className="--card-description text-brand-text text-base">{props.cardDesc}</p>
                </div>
                
            </motion.div>
        </div>
    )
}