import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer & Designer</h4>
                <h5>Modmail / Krystu</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started my journey building creative web tools and automated software solutions, focusing on seamless user experiences, modern UI design, and scalable functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>NyayeSetu</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed platforms focused on legal assistance and supervision of Indian laws. Built robust end-to-end architectures to increase public access to legal guidance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Software Engineer</h4>
                <h5>Boomcall</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading the development of an advanced AI call agent platform. Focused on building high-performance, production-ready full-stack applications with AI integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
