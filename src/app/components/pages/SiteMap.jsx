import React, { useEffect } from "react";
//import './Sitemap.css'; // Assuming you have some external CSS

const SiteMap = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="main-body">
      <div className="main-con">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontSize: "36px",
                    textAlign: "center",
                    fontweight: "500",
                  }}
                >
                  Invest Mango Sitemap
                </h1>
              </div>
              <div className="col-md-6">
                <h2 style={{ color: "black" }}>Home</h2>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="https://propertymarvels.in/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://propertymarvels.in/video"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://propertymarvels.in/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://propertymarvels.in/career"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://propertymarvels.in/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>

                <h2 style={{ color: "black" }}>Our Projects</h2>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="https://propertymarvels.in/allProjects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      All Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://propertymarvels.in/allProperties"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Top Projects
                    </a>
                  </li>
                </ul>

                <h2 style={{ color: "black" }}>Other Links</h2>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="https://www.investmango.com/residential-projects-in-sector-150-noida.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Residential Projects in Sector 150 Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/new-residential-projects-in-noida.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      New Residential Projects in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/new-projects-in-noida-extension.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      New Projects in Noida Extension
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/3-bhk-flats-in-noida-extension-ready-to-move.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      3Bhk Flat in Noida Extension Ready to Move
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/godrej-projects-in-noida.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Godrej Projects in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/ace-projects-in-noida.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ACE Projects in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/ats-projects-in-noida.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ATS Projects in Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/best-residential-projects-in-siddharth-vihar-ghaziabad.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Best Residential Projects in Siddharth Vihar Ghaziabad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/2-bhk-flat-in-noida-extension-ready-to-move.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2Bhk Flat in Noida Extension Ready to Move
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.investmango.com/best-residential-projects-in-greater-noida-west.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Best Residential Projects in Greater Noida West
                    </a>
                  </li>
                </ul>

                <h2 style={{ color: "black" }}>Mango Insights</h2>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="https://propertymarvels.in/mango-insights"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <img
                  src="/images/sitemap.webp"
                  alt="Sitemap"
                  id="sitemapImage"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Component or content goes here */}
    </section>
  );
};

export default SiteMap;
