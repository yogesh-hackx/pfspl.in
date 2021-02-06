import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className="heroImage-container">
                <div className="hero-backdrop"></div>
                <img src="/hero-image.jpg" className="hero-image" />
                <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
                    <p>
                        <img src="/LOGO.svg" alt="" className="logo" />
                    </p>
                    <p>CATERING</p> <p>WITH QUALITY</p>
                </div>
            </div>
        </>
    );
};

export default Hero;
