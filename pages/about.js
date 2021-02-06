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
                            <p>About us</p>
                            <p className="about-heading-quotes absolute -top-8">
                                &quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-text max-w-3xl mx-auto my-4 bg-white px-8 py-8 rounded-md shadow-xl text-lg">
                <p className="my-6">
                    Purnagiri was founded in the year 2007 by Mr. Lokmani Pandey
                    and Mr. Gopal Pandey, both obsessed with doing something
                    different in catering field with a vision to provide every
                    possible and potentially best service in the industry.
                </p>
                <p className="my-6">
                    From running operations in a small room to a company with
                    over 200 employees, the jorney was quite a coaster ride.
                    Many challenges came, but Purnagiri Food stands tall after
                    successfully running industrial and events catering for over
                    13 years.
                </p>
                <p className="my-6">
                    Years passed by and we kept working, innovating and
                    improving ourselves during the transition and now we are
                    facilitated with most of the advanced food machines and
                    techniques in our operations.
                </p>
                <p className="my-6">
                    Purnagiri Food Services has built its name in the catering
                    field while working with clients like Tata Motors, Hindustan
                    Zinc, Titan, Micromax, TVS Group and many more.
                </p>{' '}
                <p className="my-6 font-bold">
                    We believe in catering with quality and we believe in
                    ourselves because we are the best.
                </p>
                <p className="my-2 font-bold text-xl">
                    From the director's desk
                </p>
                <p className="">
                    Our customers are our biggest victory. We have tackled many
                    problems and happenings in the sector and always emerged out
                    with a win or a lesson to win the next time. The only thing
                    our company believes in is giving almost everything for the
                    customer satisfaction and service.
                </p>
            </div>
        </>
    );
}
