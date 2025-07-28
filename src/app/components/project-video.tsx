'use client';

type ProjectVideoProps = {
    image: string;
    video: string;
};

const ProjectVideo = ({ image, video }: ProjectVideoProps) => {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            className='rounded-lg object-cover shadow-lg w-full h-auto'
            poster={image}>
            <source src={video} type='video/mp4' />
        </video>
    );
};

export default ProjectVideo;
