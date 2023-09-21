import Image from 'next/image';

export default function AboutMeCard(props) {
    return (
        <div className="--card-div flex justify-around w-2/4 h-full overflow-hidden rounded-lg p-4 bg-brand-secondary backdrop-blur-md bg-opacity-50 gap-7 shadow-lg">
            <div>
                <Image
                    className='rounded-full'
                    src="/assets/portrait.png"
                    width={800}
                    height={800}
                    alt="Portrait of Xander"   
                />
            </div>
            <div className='text-xl'>
                <h1 className='text-6xl'>About Me</h1>
                <p>Hello! My name is Xander, a passionate and versatile full-stack web developer. Welcome to my corner of the internet!</p>
                <br/>
                <h2 className='text-4xl'>My Journey</h2>
                <p>Starting my journey in high school learning simple HTML and CSS, I was immediately enthralled with creating whatever I wished. Since then, I've been on an exciting journey through the ever-evolving world of web development. What started as a curiosity has grown into a full-fledged career and a profound passion for crafting digital experiences.</p>
                <br/>
                <h2 className='text-4xl'>The Full-Stack Explorer</h2>
                <p>As a full-stack developer, I love the idea of exploring both the front-end and back-end realms of web development. From designing elegant user interfaces to architecting robust server-side solutions, I enjoy every aspect of the development process. Whether it's HTML, CSS, JavaScript, React, Node.js, or databases like MongoDB and SQL, I'm always eager to expand my skillset.</p>
                <br/>
                <h2 className='text-4xl'>Problem Solver & Innovator</h2>
                <p>One of the things I cherish most about web development is the opportunity to solve real-world problems. I'm dedicated to creating solutions that are not just functional, but also intuitive and delightful to use. I thrive on finding innovative ways to improve user experiences and streamline processes.</p>
                <br/>
                <h2 className='text-4xl'>Collaboration and Continuous Learning</h2>
                <p>I believe that the best projects are born from collaboration. Working closely with designers, fellow developers, and stakeholders allows me to gain fresh perspectives and collectively create something exceptional. I'm also a firm believer in continuous learning. In the ever-evolving tech landscape, staying up-to-date with the latest technologies and best practices is crucial.</p>
                <br/>
                <h2 className='text-4xl'>Let's Create Together</h2>
                <p>Whether you're looking to bring your next web project to life, need assitance with an existing application, or simply want to connect and share ideas, I'm here for you. Let's collaborate and turn your vision into a reality. Together, we can build beautiful, functional, and impactful web solutions.</p>
                <br/>
                <p>Feel free to explore my portfolio to see some of my previous projects. If you have any questions or would like to discuss a potential collaboration, don't hesistate to get in touch. I'm excited to embark on this web development journey with you!</p>
            </div>
        </div>
    )
}