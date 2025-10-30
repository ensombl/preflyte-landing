import Blogs from "@/components/marketing/blogs";
import type { Metadata } from "next";
import { generateMetadata } from "@/utils";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import HowItWorks from "@/components/marketing/how-it-works";
import Methodology from "@/components/marketing/methodology";
import Stats from "@/components/marketing/stats";
import Testimonials from "@/components/marketing/testimonials";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <Hero />
            <Stats />
            <Methodology />
            <Companies />
            <HowItWorks />
            <Features />
            {/* <Faq /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            <CTA />
        </div>
    );
};

export default HomePage;

export const metadata: Metadata = generateMetadata({
    title: "Hire better engineers, faster",
    description: "Preflyte automates technical interviews and code reviews so you can hire top engineers faster and cheaper than traditional processes.",
    path: "/",
    keywords: [
        "technical interviews",
        "developer hiring",
        "coding assessments",
        "AI interviews",
        "engineering hiring platform",
    ],
});
