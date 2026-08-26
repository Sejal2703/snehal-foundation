import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Programs = () => {

  const location = useLocation();
  useEffect(() => {
    if(location.hash) {
      const element = document.getElementById(location.hash.substring(1));

      if (element) {
        element.scrollIntoView({
          behaviour: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <main className="pt-24 px-6 md:px-20">

      <h1 className="text-4xl font-bold text-center mb-16">
        Our Programs
      </h1>
       
      


      <div className="space-y-16">

        <Program
          id="education"
          title="Education Support"
          img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          desc="We support underprivileged children with school supplies,
          scholarships, mentoring, and access to quality education."
        />

        <Program
          id="healthcare"
          title="Healthcare Initiatives"
          img="https://images.unsplash.com/photo-1584515933487-779824d29309"
          desc="Our healthcare camps provide free medical checkups, medicines,
          and health awareness programs in rural areas."
        />

        <Program
          id="skill"
          title="Skill Development"
          img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
          desc="We train youth and women in vocational skills to help them
          become financially independent."
        />

      </div>

    </main>
  );
};

const Program = ({id, title, img, desc }) => (
  <div id={id} className="grid md:grid-cols-2 gap-10 items-center scroll-mt-28">
    <img src={img} className="rounded-xl shadow-lg" alt={title} />
    <div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Programs;
