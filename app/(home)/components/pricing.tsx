import PricingSingle from "./sub_components/pricing_single";

const Pricing = () => {
  return (
    <>
      <section className="lui-section lui-gradient-center" id="pricing-section">
        {/* <!-- Heading --> */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Pricing </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Price Board</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pricing --> */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="pricing-items row">
              <PricingSingle />
              <PricingSingle />
              <PricingSingle />
            </div>

            <div className="lui-bgtitle">
              <span> Pricing </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
