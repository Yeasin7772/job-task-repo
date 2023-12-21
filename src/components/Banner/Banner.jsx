import { useEffect } from "react";
import image from '../../assets/slider2.png'
import bgImage from '../../assets/bg-image.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])
    return (
        <div className="lg:px-10 px-4 lg:py-10 py-14 text-center lg:flex lg:flex-row flex-col-reverse justify-between items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="lg:w-1/2 lg:pr-12 lg:text-left mb-8">
                <h2
                    data-aos="fade-right"
                    className="text-4xl lg:text-5xl font-semibold mb-4 leading-normal"
                >
                    Freelance Services For Your Business
                </h2>
                <p data-aos="fade-left" className="">
                    Work with talented people at the most affordable price to get the most
                    out of your time and cost
                </p>
                <form className="footer-form">
                    <fieldset className="form-control w-full">
                        <label className="label">
                        </label>
                        <div className="join flex">
                            <input
                                type="text"
                                placeholder="What are you looking for"
                                className="input input-bordered join-item lg:w-80 w-full"
                            />
                            <button className="btn  join-item">Search</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="lg:w-1/2">
                <img
                    data-aos="fade-up"
                    src={image}
                    className="w-full h-auto rounded-lg"
                    alt="banner"
                />
            </div>
        </div>


    );
};

export default Banner;