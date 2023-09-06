import Image from "next/image";
import Link from "next/link";
import {usePageData} from "@/app/context/allPageData";
import axios, {AxiosResponse} from "axios";

interface HeroPageProps {
    pageData: NormalPageData
}

const Hero: React.FC<HeroPageProps> = async ({pageData}) => {

    return (
        <>
            <section
                className="lui-section lui-section-hero lui-gradient-top"
                id="started-section"
            >
                <div className="container">
                    <div className="lui-started v-line v-line-left">
                        <div className="section hero-started">
                            <div
                                className="content scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                            >
                                <div className="titles">
                                    <div className="lui-subtitle">
                    <span>
                      
                        {pageData?.greeting_in_black}, <b>{pageData?.greeting_in_green}</b>
                    </span>
                                    </div>
                                    <h1
                                        className="title splitting-text-anim-1 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                    <span>
                      <b>{pageData?.name_in_green}</b>{pageData?.name_in_white}
                    </span>
                                    </h1>
                                    <div className="label lui-subtitle">

                                        {pageData?.occupation_first}<strong>{pageData?.occupation_italic}</strong>
                                    </div>
                                </div>
                                <div className="description">
                                    <div>
                                        <p>
                                            {pageData?.description}
                                        </p>
                                    </div>
                                    <div className="social-links">
                                        {
                                            Array.isArray(pageData?.links)
                                                ? pageData?.links.map((item: {
                                                    social: string;
                                                    name: string;
                                                    url: string
                                                }) => (
                                                    <a target="_blank" rel="nofollow" href={item.url} key={item.name}>
                                                        <i aria-hidden="true" className={`fab fa-${item.social}`}></i>
                                                    </a>
                                                ))
                                                : null // You can provide a fallback or handle the case when links is not an array
                                        }
                                    </div>

                                </div>
                                <div className="bts">
                                    <a
                                        target="_blank"
                                        href={pageData?.call_to_action_link}
                                        className="btn"
                                    >
                                        <span>{pageData?.call_to_action_text}</span>
                                    </a>
                                    <Link href="#skills-section" className="btn-lnk">

                                        My Skills
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="slide scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                            >
                                {pageData?.hero_image && (
                                    <Image
                                        decoding="async"
                                        className="flip-image"
                                        src={pageData.hero_image as string}
                                        alt="Zoé Miller"
                                        width={1000}
                                        height={1000}
                                        priority
                                    />
                                )}
                                <span className="circle circle-1"></span>
                                <span
                                    className="circle img-1"
                                    style={{backgroundImage: "url(/images/pat-1.png)"}}
                                ></span>
                                <span
                                    className="circle img-2"
                                    style={{backgroundImage: "url(/images/pat-2.png)"}}
                                ></span>
                                <span
                                    className="circle img-3"
                                    style={{backgroundImage: "url(/images/pat-2.png)"}}
                                ></span>
                                <div className="info-list">
                                    <ul>
                                        <li>
                      <span className="num">{pageData?.experience_years}<strong>+</strong>
                      </span>
                                            <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                                        </li>
                                        <li>
                                            <span className="num">{pageData?.project_completed}+</span>
                                            <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lui-bgtitle">
                            <span> Web Developer </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
