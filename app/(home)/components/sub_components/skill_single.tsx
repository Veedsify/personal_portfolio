import React from "react";

export interface SingleSkillsProps{
    id: number
    skill_name: string
    skill_description: string
    skill_level: number
    date: string
    skill_category: string
    skills_id: string
    slug: string
    user_id: string
}

const SkillSingle: React.FC<SingleSkillsProps> = async ({ id,skill_name, skill_description,skill_level }) => {
    return (
        <div className="skills-items">
            <div
                className="skills-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
            >
                <h6 className="name">
                    <span> {skill_name} </span>
                </h6>
                <div className="text">
                    <div>
                        <p>
                            {skill_description}
                        </p>
                    </div>
                </div>
                <div className="dots">
                    <div className="dot" style={{width: `${skill_level}%`}}>
                        <span></span>
                    </div>
                </div>
                <div className="value">
                      <span className="num">
                        {skill_level} <span>%</span>
                      </span>
                </div>
            </div>
        </div>
    )
}

export default SkillSingle