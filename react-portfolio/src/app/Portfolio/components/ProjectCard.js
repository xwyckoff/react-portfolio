import Image from 'next/image';

export default function ProjectCard(props) {
    return (
        <div className="--portfolio-card max-w-6xl rounded overflow-hidden shadow-lg bg-brand-secondary backdrop-blur-md bg-opacity-50 border border-brand-tertiary">
            <img
                className='--card-image w-full'
                src={props.imgSrc}
            />
            <div className="--card-body p-3">
                <div className='--card-title font-bold text-xl mb-2'>{props.cardTitle}</div>
                <p className="--card-description text-brand-text text-base">{props.cardDesc}</p>
            </div>
            
        </div>
    )
}