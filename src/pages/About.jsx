import React from "react";
import aboutImg from "../components/assets/images/about.jpg";
import imgs from "../components/assets/images/join1.png";
import { AiOutlineCheck } from "react-icons/ai";
import { IoAccessibility } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { BiMath } from "react-icons/bi";

export const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why An Scholercity Out Of The Ordinary
            </h1>
            <span className="text-sm mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-2">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<IoAccessibility size={50} />}
              title="Physical Education"
              desc="Running, jumping, playing games: promote fitness, enhance coordination in children"
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<GiNotebook size={50} />}
              title="Art and Craft"
              desc="Drawing, coloring, painting, crafting: ignite creativity, refine motor skills "
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaBookReader size={50} />}
              title="Storytelling and Reading:"
              desc="Storytelling, reading aloud, narrating, introducing books: foster imagination, literacy skills"
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<BiMath size={50} />}
              title="Math and Science Exploration"
              desc="Counting, sorting, water/magnet experiments: explore nature understanding in children "
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};
export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={aboutImg} alt="aboutImg" className=" rounded-xl" />
          
          <div className="img-group ml-15 flex ">
            <img src={imgs} alt="" />
            <span className="text-[14px] mt-3">
              Join over <label className="text-black text-sm">250+</label>{" "}
              students
            </span>
          </div>
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Achieve Your Goals With Educal
            </h1>
            <span className="text-sm mt-2 block leading-6">
              {" "}
              Unlock your potential and achieve your goals with Educal A.F
              Academy School. We offer a nurturing environment where students
              thrive academically, socially, and personally. With innovative
              teaching methods and dedicated educators, we empower students to
              excel and succeed in their academic journey and beyond. Join us
              today!.
            </span>
            <ul className="my-5">
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Upskill your
                organization.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Access more then 10+ courses
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" />
                Learn the latest skills
              </li>
            </ul>
            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              Admission Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
