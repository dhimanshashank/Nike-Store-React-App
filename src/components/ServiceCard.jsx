
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16" data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1100">
      <div className="w-11 h-11 justify-center flex items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24}/>
      </div>

      <h3 className="mt-5 font-palanquin font-bold text-3xl">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
