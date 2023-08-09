import Image from 'next/image';

export default function AboutMeCard(props) {
    return (
        <div className="--card-div flex justify-around w-2/4 h-full overflow-hidden rounded-lg p-4 bg-brand-secondary backdrop-blur-md bg-opacity-50 gap-7 border border-brand-tertiary">
            <div>
                <Image
                    className='rounded-full'
                    src="/portrait.png"
                    width={600}
                    height={600}
                    alt="Portrait of Xander"   
                />
            </div>
            <div className='text-xl'>
                <p>Hello! My name is Xander. I'm a full stack web developer looking to start my career in the field. I thrive in a fast-paced environment and have an excellent attention to detail. I'm also a huge computer nerd who loves to spend time gaming and working on my car. You can find some of the projects I've developed by myself and with a team on this page as well as my GitHub.</p>
                <br/>
                <p>Feel free to contact me through the social media provided on here, or through my email. Thank you for taking a look at my portfolio and I look forward to hearing from you!</p>
            </div>
        </div>
    )
}