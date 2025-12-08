import React from 'react'
import type { Metadata } from 'next'
import { generateMetadata } from '@/utils'
import PricingHero from "@/components/pricing/pricing-hero"
import PricingQuestions from "@/components/pricing/pricing-questions"
import Faq from "@/components/marketing/faq"
import CTA from "@/components/marketing/cta"

const PricingPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <PricingHero />
            {/* <PricingQuestions /> */}
            {/* <Faq /> */}
            <CTA />
        </div>
    )
}

export default PricingPage 

export const metadata: Metadata = generateMetadata({
    title: 'Pricing',
    description: 'Simple, transparent pricing for Preflyte. Start small and scale as you grow with Early Access savings.',
    path: '/pricing',
    keywords: ['Preflyte pricing', 'developer hiring', 'technical interviews', 'AI interviews', 'coding assessments'],
});