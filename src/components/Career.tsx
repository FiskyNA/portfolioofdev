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
                <h4>Developer</h4>
                <h5>NyayeSetu</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my coding journey by building NyayeSetu — a legal-tech
              platform to help people access Indian laws and legal guidance.
              Learned how to structure data, build user flows, and turn a real
              problem into a working product.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer & Designer</h4>
                <h5>Modmail / Krystu</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built creative web tools and automation scripts with Modmail and
              Krystu. Focused on clean UI design, smooth user experiences, and
              making things that actually work — not just look good.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>Boomcall</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently working on Boomcall — an AI call agent platform.
          Learning how to integrate AI into full-stack apps and ship
          production-ready features one step at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
