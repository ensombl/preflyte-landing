export type PlanFeature = {
    text: string;
};

export type Plan = {
    name: string;
    badge?: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    buttonText: string;
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Prelyte Essential",
        badge: "Early Access Discount",
        description: "Perfect for getting started",
        price: {
            monthly: 99,
            yearly: 1188,
        },
        features: [
            { text: "$2 per additional interview" },
            { text: "10 active job profiles" },
            { text: "50 included interviews/month" },
            { text: "AI-generated code review scenarios" },
            { text: "Priority support" },
            { text: "Anti Cheat Intelligence" },
        ],
        buttonText: "Contact Us",
        popular: true,
    },
];

export const MARQUEE_ITEMS = [
    "Code-Review Style interviews",
    "Human-in-the-Loop Scoring",
    "Test Candidates on Patterns",
    "Real-World Scenarios",
    "Custom Branding & Reports"
];
