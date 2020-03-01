import React from 'react';
import './css/landing.css';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


const Landing = () => {
  return (
    <div>
      <section className="showcase mx-0 px-0 text-dark bg-white">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="showcase-left">
              <div className="mt-5">
                <Fade top>
                  <img src="/img/landing/meteogram.png" />
                </Fade>
              </div>
            </div>
          </div>
          <div className="showcase-box col-md-12 col-lg-6">
            <div className="showcase-right">
              <Fade right>
                <h1>Bruce Weather Forecast</h1>
                <p>Bruce Coding Center is providing the weather forecast of Australia main cities. (ADELAIDE, BRISBANE, CANBERRA, DARWIN, HOBART, MELBOURNE, PERTH, SYDNEY), You can visit <span className="text-danger">Navbar Weather </span> to see it. </p>
              </Fade>
            </div>
            <br />
            <Wobble>
              <a className="btn btn-danger text-white btn-lg showcase-btn mb-5" href="http://www.bom.gov.au/australia/majorcities.shtml?ref=hdr" target="_blank">Read More</a>
            </Wobble>
          </div>
        </div>
      </section>
      <div>
        <Zoom>
          <section className="testimonial">
            <div className="container">
              <p>"Bruce Weather Service is based on React, React Hooks, React Routers,Spring Boot, Restful API Service, TypeScript, Redux, Bootstrap 4 and lots of other Cutting Edge Technologies. Always providing practical, efficient and effective service.  Keep Learning, Keep Studying and Keep Coding can make life simple, but also beautiful..."</p>
              <p className="customer"><img src="/img/profile/bruce.png" className="rounded-circle" style={{ width: "40px" }} alt="" /> -- Bruce Sun</p>
            </div>
          </section>
        </Zoom>
      </div>
      <section className="showcase mx-0 px-0 text-dark bg-white">
        <div className="row">

          <div className="showcase-box col-md-12 col-lg-6">
            <div className="showcase-right">
              <Fade left>
                <h1>Bruce's Skills</h1>
                <p>As an experienced full stack developer, I have rich experience both in front-end and backend coding. Deep understanding in Java, Java EE, Javascript, JQuery,  TypeScript, Angular, React, NodeJS, Express, Python, SQLServer, Oracle, MySQL, PostgreSQL, Mongoose, MongoDB. In addition, I am also a loyal fan of Spring framework (Spring Boot, Spring Cloud, Spring Microservices, Spring Security). Last but not least, SQL and Object Relational Mapping (JAP / Hibernate) are also my strengths.</p>
              </Fade>
            </div>
            <br />

          </div>
          <div className="col-md-12 col-lg-6">
            <Fade right>
              <div className="showcase-left">
                <div className="mt-5 mb-3">
                  <Zoom>
                    <img className="smallImg" src="/img/landing/Meteogram2.png" />
                  </Zoom>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <div>
        <Flip right>
          <section className="testimonial">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/head-js.jpg" alt="" />
                  </span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/head-java.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-sql.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-python.jpg" alt="" /></span>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-dp.jpg" alt="" />
                  </span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-jsp.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-da.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-ooad.jpg" alt="" /></span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-agile.jpg" alt="" />
                  </span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-css.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-sd.jpg" alt="" /></span>
                </div>
                <div className="col-3">
                  <span><img style={{ width: '120px' }} src="/img/books/hd-wd.jpg" alt="" /></span>
                </div>
              </div>
              <p className="customer text-white mt-5">"Head First series books are good to developers who decide to take advantage of the best design practices and knowledges to craft a multi-sensory learning experience" -- Bruce Sun </p>
            </div>
          </section>
        </Flip>

      </div>
    </div >
  )
};

export default Landing; 
