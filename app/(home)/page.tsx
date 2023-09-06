import {Metadata} from "next";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Resume from "./components/resume";
import Services from "./components/services";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Works from "./components/works";
import axios, {AxiosResponse} from "axios";

export const metadata: Metadata = {
    title: "Home Page"
}

export default async function Home() {

    const {data: pageData}: AxiosResponse = await axios.get(`${process.env["NEXT_PUBLIC_BASE_URL"]}/api/get-data`)

    return (
        <>
            <Header/>
            <div className="wrapper">
                <Hero pageData={pageData}/>
                <Services pageData={pageData}/>
                <Skills pageProps={pageData}/>
                <Works/>
                <Resume/>
                <Testimonials/>
                <Pricing/>
                <Blog/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}
