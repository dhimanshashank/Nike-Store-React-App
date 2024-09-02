import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { shoes } from "../constants";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg max-container w-full gap-10"
    >
      <div className="flex flex-1 flex-col" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide the 
          <br />
          <span className="text-coral-red">Super</span> Quality
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="fmt-4 lg:max-x-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View details" />
          
        </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center" data-aos="fade-left" data-aos-duration="1100">
            <img src={shoe8} alt="shoe8" 
            width={570}
            height={522}
            className="object-contain"/>
        </div>
      
    </section>
  );
};

export default SuperQuality;
