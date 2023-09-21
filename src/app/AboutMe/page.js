"use client"
import AboutMeCard from "./components/AboutMeCard";
import { motion } from "framer-motion";
import Head from 'next/head';

export default function AboutMe() {
    return (
        <motion.main className="flex justify-center items-center" initial="hidden" animate="visible" variants={{
            hidden: {
                opacity: 0,
                y: 100
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                }
            },
        }}>
            <AboutMeCard />
        </motion.main>
    )
}