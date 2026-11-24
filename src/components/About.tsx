import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hi! I'm Dev Kumar, a 15-year-old developer and software enthusiast. I'm obsessed with
          turning weird ideas into working code — whether that's a weekend web project, an AI
          experiment, or just figuring out why something won't render on Safari.
        </p>
        <p className="para" style={{ marginTop: "16px" }}>
          I started coding young and haven't stopped since. From legal-tech platforms like
          NyayeSetu to tinkering with Three.js characters and AI integrations, I love taking
          messy concepts and turning them into something that actually works. When I'm not
          debugging at midnight, you'll find me picking up new frameworks, digging into open
          source, or breaking things just to learn how to fix them.
        </p>
      </div>
    </div>
  );
};

export default About;
