interface NormalPageData {
    id: number;
    logo: string;
    logo_link: string;
    website_name: string;
    website_description: string;
    greeting_in_black: string;
    greeting_in_green: string;
    name_in_green: string;
    name_in_white: string;
    occupation_first: string;
    occupation_italic: string;
    hero_image: string;
    experience_years: string;
    project_completed: string;
    description: string;
    links: LinkProps[];
    call_to_action_text: string;
    call_to_action_link: string;
    services_title: string;
    skills_title: string;
    portfolio_title: string;
    resume_title: string;
    testimonial_title: string;
    pricing_title: string;
    pricing_tiers: string;
    blog_title: string;
    blog_subtitle: string;
    blog_cta: string;
    footer_address: string;
    footer_email: string;
    footer_phone: string;
    footer_freelance_status: string;
    footer_contact_cta: string;
    date: string;
    target_id: string;
}


interface LinkProps {

    social: string;
    name: string;
    url: string;

}