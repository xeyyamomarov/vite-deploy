import img from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src={img}
        alt="background"
        className="w-full h-screen object-cover  scale-x-[-1] "
      />
      <div className="w-full h-screen  absolute top-0 left-0 bg-white/50">
        <div className="flex flex-col max-w-[700px] w-full h-full m-auto justify-center lg:items-center items-start" >
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">I'm Khayyam Omar</h1>
        <h2 className="flex pt-4 sm:text-3xl text-2xl text-gray-800 " >
          I'm a
          <TypeAnimation
            sequence={[
              "Developer", // Types 'One'
              1000, // Waits 1s
              "Coder", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
          />
        </h2>
        <div className="flex justify-between pt-6 w-full max-w-[200px]" >
          <FaGithub size={20} className="cursor-pointer" />
          <FaLinkedinIn size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
