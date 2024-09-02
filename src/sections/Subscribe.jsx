import Button from "../components/Button";

const Subcribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
        <h3 className="font-palanquin font-bold text-4xl text-center leading-[68px] lg:max-w-md">Sign-Up for
          <span className="text-coral-red"> Updates</span> and newsletter
        </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input bg-gray-100"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
