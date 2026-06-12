import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hi! I'm Dev Kumar, a 14-year-old Sr. Software Engineer, Developer, and Founder of BuildiO.
          With a strong passion for technology and coding since a young age, I specialize
          in building robust web applications, AI integrations, and creative solutions.
        </p>
        <p className="para" style={{ marginTop: "16px" }}>
          I thrive on taking ideas from concept to production-ready deployments. From building
          legal-tech platforms like NyayeSetu to AI-powered solutions at BuildiO, I love turning
          complex problems into elegant, user-friendly products. When I'm not coding, you'll find
          me exploring new frameworks, contributing to open source, and mentoring fellow developers.
        </p>
      </div>
    </div>
  );
};

export default About;
