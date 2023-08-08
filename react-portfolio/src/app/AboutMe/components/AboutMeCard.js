import Image from 'next/image';

export default function AboutMeCard(props) {
    return (
        <div className="--card-div flex justify-around w-2/4 h-full overflow-hidden rounded-lg p-4 bg-brand-secondary backdrop-blur-md bg-opacity-50 gap-7 border border-brand-tertiary">
            <div>
                <Image
                    className='rounded-full'
                    src="/portrait.png"
                    width={400}
                    height={400}
                    alt="Portrait of Xander"   
                />
            </div>
            <div className='text-lg'>
                <p>Hello! My name is Xander. I'm a full stack web developer looking to start my career in the field. I'm a huge computer nerd and like to spend my free time gaming or working on my car. You can find some of the projects I've developed on this page, or on my GitHub.</p>
                <br/>
                <p>Feel free to contact me through the social media provided on here, or through my email. Thank you for taking a look at my portfolio and I look forward to hearing from you!</p>
            </div>
        </div>
    )
}