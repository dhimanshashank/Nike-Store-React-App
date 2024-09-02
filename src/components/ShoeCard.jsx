const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      changeBigShoeImage(imgURL.bigShoe);
    };
  
    return (
      <div
        className={`border-2 rounded-lg p-2 cursor-pointer transition ${
          bigShoeImg === imgURL.bigShoe
            ? "border-red-500"
            : "border-transparent hover:border-gray-300"
        }`}
        onClick={handleClick} 
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="flex justify-center items-center bg-gray-100 rounded-lg">
          <img
            src={imgURL.thumbnail}
            alt="shoe collection"
            className="object-contain w-24 h-24"
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  