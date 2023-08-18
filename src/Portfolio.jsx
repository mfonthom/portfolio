import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Owosh from "./assets/owosh-thumbnail.jpg";
import Protrack from "./assets/protrack-thumbnail.jpg";
import Nwaeze from "./assets/nwaeze.png";
import NerdyEye from "./assets/nerdyEye.png";
import Dp from "./assets/mypic.jpeg";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <section className="main">
          <div className="container">
            <div className="bgtext">
              {" "}
              <span>Frontend Developer</span>{" "}
            </div>
            <div
              className="dp"
              style={{
                backgroundImage: `url(${Dp})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="wrapper">
              <div className="header">
                <div className="headerLeft">
                  <h1 style={{ color: "#fff" }}>I am Mfonabasi Thompson</h1>
                  <br />
                  <h3>
                    Front End Developer{"  "}
                    <span className="tinytext">. 5 years Experience</span>
                  </h3>
                  <br />
                  <p className="paragraph">
                    I love to consider myself as a PROBLEM-SOLUTION centric
                    Frontend developer, I translate designs into working codes
                    that solves actual problems with experience interfacing with
                    the Design team, I have good knowledge of UI Design, Node
                    Js, specifically MERN Stack with experience working with an
                    agile team. I love to create content and share my knowledge
                    with my community from my social media.{" "}
                  </p>
                </div>

                <div className="headerRight">
                  <div className="iconbg">
                    <a href="https://github.com/mfonthom">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ background: "none" }}
                      />
                    </a>
                  </div>

                  <div className="iconbg">
                    <a href="https://www.linkedin.com/in/mfonabasi-thompson-b81b41b5/">
                      {" "}
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="2x"
                        style={{ background: "none" }}
                      />
                    </a>
                  </div>

                  <div className="iconbg">
                    <a href="https://twitter.com/fahviee">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        style={{ background: "none" }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="works">
                <div className="cardwrapper">
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${NerdyEye})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="cardbase">
                      <button className="btn">
                        <a href="https://nerdyeye.com/">View Website </a>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          size="1x"
                          style={{ background: "none" }}
                        />
                      </button>
                    </div>
                  </div>
                  <span className="tinytext">- Ed Tech</span>
                  <h3>NerdyEye web Application</h3>
                  <p className="paragraph">
                    NerdyEye is a Community Ed-Tech web application, here users
                    can create an account and subscribe to the platform to learn
                    a tech skill, work on projects to build their portfolio and
                    can also apply for jobs after they are done learning. The
                    major frame work of the project is React Js and Node Js, the
                    styling system used here is Styled Components and the files
                    were structured after the Atomic Design File Structure
                    format.
                  </p>
                </div>

                <div className="cardwrapper">
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${Owosh})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="cardbase">
                      <button className="btn">
                        <a href="https://owosh.com/">View Website </a>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          size="1x"
                          style={{ background: "none" }}
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <span className="tinytext">- Streaming </span>
                  <h3>Owosh movie web Application</h3>
                  <p className="paragraph">
                    Owosh is a movie streaming web application. The major frame
                    work of the project is React JS, the styling system used
                    here is Styled Components and the files were structured
                    after the Atomic Design File Structure format.
                  </p>
                </div>

                <div className="cardwrapper">
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${Protrack})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="cardbase">
                      <button className="btn">
                        <a href="https://protrack-eight.vercel.app/">
                          View Website{" "}
                        </a>{" "}
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          size="1x"
                          style={{ background: "none" }}
                        />{" "}
                      </button>
                    </div>
                  </div>
                  <span className="tinytext">- Productivity </span>
                  <h3>ProTrack web Application</h3>
                  <p className="paragraph">
                    This is a Productivity tracking web application. It can be
                    used by Individuals, Teams and even Organizations to Track
                    and Monitor productivity. The major frame work of the
                    project is React JS, the styling system used here is Styled
                    Components and the files were structured after the Atomic
                    Design File Structure format.
                  </p>
                </div>

                <div className="cardwrapper">
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${Nwaeze})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="cardbase">
                      <button className="btn">
                        <a href="https://nwaeze.net/">View Website</a>{" "}
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          size="1x"
                          style={{ background: "none" }}
                        />
                      </button>
                    </div>
                  </div>
                  <span className="tinytext">- E commerce</span>
                  <h3>Nwaeze E-commerce web Application</h3>
                  <p className="paragraph">
                    This is a wordpress based e commerce web application.
                    Customers can search, add to cart, checkout and message the
                    business on whatsapp if need be
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hobby">
          <div>
            <h1>Other Things I do</h1>
            <span className="tinytext">
              - Content Creation - Dancing - Playing Games
            </span>
          </div>
        </section>
        <section className="footer">
          <div>
            <h1 className="">Let's Work Together </h1>
            <span className="tinytext">thompsonmfonabasi@gmail.com</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
