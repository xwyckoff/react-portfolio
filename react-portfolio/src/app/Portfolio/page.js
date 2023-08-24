import ProjectCard from './components/ProjectCard';

export default function Portfolio() {
    return (
        <main className='flex justify-center'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10'>
                <ProjectCard imgSrc="https://www.picsum.photos/700/234" cardTitle="TEST" cardDesc="idk"/>
                <ProjectCard imgSrc="https://www.picsum.photos/700/234" cardTitle="TEST" cardDesc="idk"/>
                <ProjectCard imgSrc="https://www.picsum.photos/700/234" cardTitle="TEST" cardDesc="idk"/>
                <ProjectCard imgSrc="https://www.picsum.photos/700/234" cardTitle="TEST" cardDesc="idk"/>
            </div>
        </main>
    )
}