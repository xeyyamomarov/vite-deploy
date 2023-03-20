import React from "react";
import WorkItems from "./WorkItems";

const data = [
  {
    year: 2020,
    title: "Helpdesk",
    duration: "1 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum praesentium ratione molestias ipsa et magni tempora. Eum, nostrum optio dicta quia voluptas amet eius atque.",
  },
  {
    year: 2021,
    title: "Frontend developer",
    duration: "1 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum praesentium ratione molestias ipsa et magni tempora. Eum, nostrum optio dicta quia voluptas amet eius atque.",
  },
  {
    year: 2022,
    title: "React developer",
    duration: "1 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum praesentium ratione molestias ipsa et magni tempora. Eum, nostrum optio dicta quia voluptas amet eius atque.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      <WorkItems data={data} />
    </div>
  );
};

export default Work;
