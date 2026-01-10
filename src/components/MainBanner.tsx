import banner1 from '../assets/MainBannerImg/banner1.jpg';
import banner2 from '../assets/MainBannerImg/banner2.jpg';
import banner3 from '../assets/MainBannerImg/images.jpg';
import Navbar from './Navbar';
import '../assets/MainBanner.css';

const MainBanner = () => {
    interface BannerSlide{
        id:number;
        image:string;
        heading:string;
        subheading:string;
    }
    const slides: BannerSlide[] = [
    {
        id: 1,
        image: '/src/assets/MainBannerImg/banner1.jpg',
        heading: "Master Web Development",
        subheading: "Learn React and TypeScript from scratch."
    },
    {
        id: 2,
        image: '/src/assets/MainBannerImg/banner1.jpg',
        heading: "Build Modern Websites",
        subheading: "Create fast, responsive static sites with Vite."
    },
    {
        id: 3,
        image: '/src/assets/MainBannerImg/banner1.jpg',
        heading: "Advance Your Career",
        subheading: "Check our careers page for new opportunities."
    }
    ];
    return(
        <>
                <Navbar/>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                    </div>
                    {
                        slides.map((slide,index)=>(
                            <div key={slide.id} className="carousel-item active">
                            <img className="d-block w-100" src={slide.image} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block" style={{ color:'black', borderRadius: '10px', padding: '20px' }}>
                                <h1 className="display-4 fw-bold">{slide.heading}</h1>
                                <p className="lead">{slide.subheading}</p>
                                <button className="btn btn-primary btn-lg">Learn More</button>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
        </>
    );
}

export default MainBanner;