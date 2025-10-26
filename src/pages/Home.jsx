import { Link } from "react-router-dom";
import headShot from "../assets/Images/headshot.jpg";

function Home() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="container-fluid">
          <div class="row mt-5">
            <div class="col-md-7">
              <div className="boxHome">
                <h4>Welcome!</h4>
                <div className="columns">
                  <div className="headshot">
                    <img src={headShot} alt="Head shot" />
                  </div>
                  <div>
                    <p>
                      I'm Thomas Wallace, Full-Stack Developer & Problem Solver.
                    </p>
                    <p>
                      I'm passionate about creating efficient, user-friendly web
                      applications that solve real-world problems. With
                      expertise in JavaScript, React, and modern web
                      technologies, I bring ideas to life through code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* personally wouldn't have 2 columns here but that's probably a
                requirement, but I would just not have this section at all*/}
            <div class="col-md-5">
              <div className="boxHome">
                <p>
                  Navigate to my <Link to="/portfolio">Portfolio Page</Link> to
                  see what I have worked on, and click on my{" "}
                  <Link to="/contact">Contact Page</Link> to connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
