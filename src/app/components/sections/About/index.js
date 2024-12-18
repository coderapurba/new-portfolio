import { ABOUT } from "../../../data";
import { SectionTitle, Service } from "../../elements";

function About() {
  const { title, description, name, image, exports, services } = ABOUT;
  return (
    <section name="About" className="element">
      <div className="container">
        <div className="flex gap-10">
          {/* ==== About Content ==== */}
          <div className="flex-1">
            {/* ==== Section Title ==== */}
            <SectionTitle
              title={title}
              subtitle={`Expert in`}
              typeWriter={exports}
              className="md:text-left text-center"
            />
            <p className="text-[#696969] max-w-full text-center md:text-left">
              {description}
            </p>
            {/* ==== Services ==== */}
            <div className="flex flex-wrap justify-between">
              {services.map((service, index) => (
                <Service key={index} {...service} />
              ))}
            </div>
          </div>
          {/* ==== About Image ==== */}
          <div className="hidden md:flex justify-end items-center w-[35%]">
            <img loading="lazy" src={image} alt={name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
