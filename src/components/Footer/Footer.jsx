import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
// import PartnerCarousel from "../Footer/carousel";
import footerLogo1 from "@/assets/footerlogo1.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 956);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="p-3" style={{ background: "#efefef" }}>
      <div className="d-flex justify-content-center">
        <div className="col-md-12 col-sm-2">
          {/* <PartnerCarousel /> */}

          {isMobile ? (
            // Mobile footer
            <div className="row mt-4 w-80 container mx-auto">
              <div
                className="row mobileFooter"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-md-12 col-sm-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={footerLogo1}
                    className="img-fluid w-30 m-auto"
                    alt=""
                  />
                  <p className="pt-8 dark-green-text t">COME GROW WITH US!</p>
                </div>

                <div className="col-6 col-md-12">
                  <div className="footer-links mb-6">
                    <ul className="nonestyle p-0 text-secondary">
                    <li>
                        <h4 className="text-center"> 

                        
                        <a
                          className="text-black text-lg text-bold text-decoration-none "
                          href="ttps://www.aecci.org.in/about/"
                        >
                          About Us
                        </a></h4>
                      </li>
                      <li>
                        <h4 className="text-center"> 

                        
                        <a
                          className="text-black text-lg text-bold text-decoration-none "
                          href="https://www.aecci.org.in/our-services/"
                        >
                          Our Services
                        </a></h4>
                      </li>
                      <li>
                      <h4 className="text-center"> 
                        <a
                          className="text-black text-decoration-none "
                          href="https://www.aecci.org.in/media/"
                        >
                          Media
                        </a>
                        </h4>
                      </li>
                      <li>
                      <h4 className="text-center"> 
                        <a
                          className="text-black text-decoration-none "
                          href="https://www.aecci.org.in/contact-us/"
                        >
                          Contact Us
                        </a>
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Desktop footer
            <div
              className="row desktopFooter mx-auto container my-8"
              style={{ marginTop: "25px" }}
            >
              <div className="col text-center">
                <img src={footerLogo1} className="img-fluid" alt="" />
                <p className="pt-8 dark-green-text">COME GROW WITH US!</p>
              </div>

              <div className="col">
                <div className="footer-links mb-6">
                  <h5 className="mb-2">About Us</h5>
                  <ul className="nonestyle p-0 text-secondary">
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/about-chamber/"
                      >
                        About Chamber
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/our-history/"
                      >
                        Our History
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/chairman-message/"
                      >
                        Chairman Message
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/chamber-policy/"
                      >
                        Chamber Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/office-bearers-3/"
                      >
                        Office Bearers
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/roles-responsibility/"
                      >
                        Roles & Responsibility
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/strategic-partners/"
                      >
                        Strategic Partners
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/chamber-dynamics/"
                      >
                        Chamber Dynamics
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/about/jobs-opportunities/"
                      >
                        Job Opportunities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="footer-links mb-4">
                  <h5 className="mb-2">Our Services</h5>
                  <ul className="nonestyle p-0 text-secondary">
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/our-services/the-wings/"
                      >
                        The Wings
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/our-services/entrepreneur-hub/"
                      >
                        Entrepreneur Hub
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/our-services/b2b-connect/"
                      >
                        B2B Connect
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/our-services/membership/"
                      >
                        Membership
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/aecci-affiliate-program/"
                      >
                        AECCI Affiliate Program
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>

              <div className="col">
                <div className="footer-links mb-4">
                  <h5 className="mb-2">Media</h5>
                  <ul className="nonestyle p-0 text-secondary">
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/our-services/aecci-arbitration-center/"
                      >
                        Arbitration Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/ways-means/"
                      >
                        Ways & Means
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/media/"
                      >
                        Media
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/events/"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/e-platform/"
                      >
                        e-Platform
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/trade-assistant-centre/"
                      >
                        AECCI-TAC
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>

              <div className="col">
                <div className="footer-links mb-4">
                  <h5 className="mb-2">Contact Us</h5>
                  <ul className="nonestyle p-0 text-secondary">
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/contact-us/aecci-head-office/"
                      >
                        AECCI Head Office
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-black text-decoration-none "
                        href="https://www.aecci.org.in/contact-us/aecci-international-hub/"
                      >
                        AECCI International Hub
                      </a>
                    </li>
                  </ul>
                  <div>
                    <h6>Stay Connected:</h6>
                    <div className="d-flex">
                      {" "}
                      <FaFacebook
                        className="icon-size-2 me-2 rounded-circle"
                        style={{
                          color: "#fff",
                          background: "#4D68A1",
                          padding: "8px",
                        }}
                      />
                      <FaTwitter
                        className="icon-size-2 me-2 rounded-circle"
                        style={{
                          color: "#fff",
                          background: "#32A9F2",
                          padding: "8px",
                        }}
                      />
                      <FaYoutube
                        className="icon-size-2 me-2 rounded-circle"
                        style={{
                          color: "#fff",
                          background: "#D03434",
                          padding: "8px",
                        }}
                      />
                      <FaLinkedin
                        className="icon-size-2 me-2 rounded-circle"
                        style={{
                          color: "#fff",
                          background: "#0077B5",
                          padding: "8px",
                        }}
                      />
                      <FaInstagram
                        className="icon-size-2 me-2 rounded-circle"
                        style={{
                          color: "#fff",
                          background: "#3A3A3A",
                          padding: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <hr />

          <div
            className="row container m-auto text-center text-sm"
            style={{ fontSize: ".8rem" }}
          >
            <div className="col-md-6 col-sm-12 mb-2">
              <span className="d-block">
                Copyright © 2020{" "}
                <b>Asian Exporters’ Chamber of Commerce and Industry</b>
              </span>
            </div>
            <div className="col-md-6 col-sm-12">
              <b>
                Terms & Conditions | Privacy Policy | Sitemap | Site maintained
                by AECCI.
              </b>
              <span className="d-block mt-3">
                The site is best viewed using IE11 and above, Mozilla Firefox,
                Safari and Chrome.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
