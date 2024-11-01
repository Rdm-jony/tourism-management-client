import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from 'react-simple-typewriter'
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import banner3 from '../../assets/banner3.webp'
const Banner = () => {
    const images = [banner1, banner2, banner3]
    return (
        <div>
            <Carousel animationHandler="fade" stopOnHover={false} showIndicators={false} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={500} showThumbs={false} >
                {
                    images.map((image, idx) => <div
                        key={idx}
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-neutral-content ">
                            <div className="lg:text-start text-center text-neutral-50 lg:w-2/3">
                                <h1 className="mb-5 text-7xl font-bold leading-normal">Journey to Your Dream <span className="text-primary"><Typewriter
                                    typeSpeed={200}
                                    cursorStyle='_'
                                    delaySpeed={1000}
                                    loop={false}
                                    words={['Destination!']}
                                ></Typewriter></span></h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn">Discover more</button>
                            </div>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;

