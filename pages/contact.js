import Image from 'next/image';

export default function AboutPage() {
    return (
        <>
            <div className="food-bg -z-10"></div>
            <div className="about-container">
                <div className="about-backdrop"></div>
                <div className="about-image">
                    <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
                        <div className="about-heading-container relative">
                            <p>Contact us</p>
                            <p className="about-heading-quotes absolute -top-8">
                                &quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-text max-w-3xl mx-auto my-4 text-center bg-white px-8 py-8 rounded-md shadow-xl text-lg">
                <h2 className="sub-heading mt-3" style={{ marginTop: '16px' }}>
                    Drop your queries at
                </h2>
                <p>
                    <a href="mailto:Pfsenterprises2012@gmail.com">
                        Pfsenterprises2012@gmail.com
                    </a>
                </p>
                <p>or</p>
                <p>
                    <a href="mailto:Deepak@pfspl.in">Deepak@pfspl.in</a>
                </p>
            </div>
        </>
    );
}
