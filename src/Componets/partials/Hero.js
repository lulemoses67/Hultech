import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero row align-center" style={{'backgroundImage': `url("https://t4.ftcdn.net/jpg/07/54/80/09/360_F_754800974_CXB9YRXM2ItqqUoEYouZnzctO9BTQhSv.jpg")`}}>
      <div className="container">
        <div className="row row-content">
            <div className="col-2">
                <img src="https://res.cloudinary.com/dq7fewstb/image/upload/v1777782031/logo_hhe6j1.png" alt="web design" />
            </div>
            <div className="col-12">
                <h2 className='text-white'>Turn clicks into clients</h2>
                <p className='text-white'>
                    <TypeAnimation
                    sequence={[
                        'Websites', // First string
                        2000,                    // Wait 2s
                        'Mobile Apps', // Second string
                        2000,                    // Wait 2s
                        'Software',           // Third string
                        2000                     // Wait 2s
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </p>
                <p className='text-white'>Move and Grow your business online with our experts</p>
                <Link to={"./conatct"} className="btn-primary">Contact</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;