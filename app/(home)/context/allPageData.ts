import axios from "axios";
import {create} from "zustand";
import {AxiosResponse} from "axios";
import {} from "@prisma/client"

// Define the type for the page data

interface LinkProps {

    social: string;
    name: string;
    url: string;

}

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

// Define the state shape including the function to fetch page data
interface PageDataState {
    pageData: NormalPageData | null; // Use null as an initial value
    fetchData: () => Promise<void>;
}

export const usePageData = create<PageDataState>()((set) => ({
    pageData: null, // Initialize with null
    fetchData: async () => {
        try {
            const response: AxiosResponse = await axios.get("/api/get-data");
            set({pageData: response.data});
        } catch (error) {
            // Handle errors here, e.g., log or show an error message
            console.error("Error fetching data:", error);
        }
    },
}));

