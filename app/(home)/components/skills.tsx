import SkillSingle, {SingleSkillsProps} from "@/app/(home)/components/sub_components/skill_single";
import axios, {AxiosResponse} from "axios";
import React from "react";

interface SkillProps {
    pageProps: NormalPageData
}

const Skills: React.FC<SkillProps> = async ({pageProps}) => {
    const {data: skills}: AxiosResponse = await axios.get(`${process.env["NEXT_PUBLIC_BASE_URL"]}/api/skills`)

    return (
        <>
            <section className="lui-section lui-gradient-center" id="skills-section">
                {/* <!-- Heading --> */}
                <div className="lui-heading">
                    <div className="container">
                        <div className="m-titles align-center">
                            <h2
                                className="m-title splitting-text-anim-1 scroll-animate"
                                data-splitting="words"
                                data-animate="active"
                            >
                                <span> {pageProps.skills_title} </span>
                            </h2>
                            <div
                                className="m-subtitle splitting-text-anim-1 scroll-animate"
                                data-splitting="words"
                                data-animate="active"
                            >
                <span>
                  my <b>Talent</b>
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Skills --> */}
                <div className="v-line v-line-left">
                    <div className="container">
                        <div className="row">
                            {skills.map((item: SingleSkillsProps) => (
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">

                                    <SkillSingle key={item.id} {...item}/>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lui-bgtitle">
                    <span> Skills </span>
                </div>
            </section>
        </>
    );
};

export default Skills;
