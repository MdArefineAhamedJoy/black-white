import imag1 from "../../assets/20240217-_RHN3369.webp";
import imag2 from "../../assets/20240217-_RHN3393.webp";

const MiddleBanner = () => {
  return (
    <div className="h-full bg-[#3c3633] flex py-80">
      <div className="h-full flex w-1/2  relative justify-center items-center h-10/13 bg-red-500">
        <img
          className=" w-[294px] h-92 absolute  left-5 z-10 top-[-136px]"
          src={imag2}
          alt=""
        />
        <img
          className="w-[294px] h-92 absolute  right-20 "
          src={imag1}
          alt=""
        />
      </div>
      <div className="w-1/2 flex items-center">
        <div className="p-5">
          <p className="font-light pb-4 text-white">Black and White</p>
          <p className="text-white text-4xl font-bold">
            Timeless minimalism for your wardrobe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
