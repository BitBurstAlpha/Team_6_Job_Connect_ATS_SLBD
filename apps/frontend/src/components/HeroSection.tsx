import Image from 'next/image';

export const HeroSection = () => {
    return (
        <div className="relative pt-40 pb-20 lg:pt-44">
            <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                    Find Your Dream Job <br className="lg:block hidden" />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80  ">
                        with Our Job Portal
                    </span>
                    .
                </h1>
                <div className="lg:flex">
                    <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                            Explore thousands of job opportunities tailored to
                            your skills and experience. Our job portal makes it
                            easy to find and apply for your next career move.
                        </p>
                        <span className="block font-semibold text-gray-500 dark:text-gray-400">
                            Start your job search today!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
