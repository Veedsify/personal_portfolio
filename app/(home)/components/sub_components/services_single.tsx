import React from "react";
export interface SinglePageProps {

    id: number;
    category: string;
    service_name: string;
    service_description: string;
    services_image: string;
    slug: string;
    date: string;
    service_id: number;

}
const ServicesSingle: React.FC<SinglePageProps> = ({category, service_name, service_description}) => {
    return (
        <>
            <div className="swiper-slide">
                <div className="services-item">
                    <div className="lui-subtitle">
                        <span> {category} </span>
                    </div>
                    <div className="icon"></div>
                    <h5 className="lui-title">
                        <span> {service_name} </span>
                    </h5>
                    <div className="lui-text">
                        <div>
                            {service_description}
                        </div>
                    </div>
                    <a href="#pricing-section" className="lnk">
                        See Pricing
                    </a>
                    <div
                        className="image"
                        style={{backgroundImage: "url(/images/pat-2.png)"}}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default ServicesSingle;
