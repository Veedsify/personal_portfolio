const PricingSingle = () => {
    return (
      <>
        <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="label">
            <span> Popular </span>
          </div>
          <div
            className="pricing-item scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="lui-subtitle">
              <span> Freelancing </span>
            </div>
            <div className="icon"></div>
            <div className="price">
              <span>
                {" "}
                259 <b>$</b>
              </span>
              <em>Week</em>
            </div>
            <div className="lui-text">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
            <div className="list">
              <div>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Brand Design
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Web Development
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Advertising
                  </li>
                  <li>
                    <em>Photography</em>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#contact-section" className="btn btn-solid">
              <span>Start Project</span>
            </a>
            <div
              className="bg-img"
              style={{ backgroundImage: "url(/images/pat-2.png)" }}
            ></div>
          </div>
        </div>
      </>
    );
}

export default PricingSingle