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
        badge: "Early Access",
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
    "Seamless Success",
    "Efficient Excellence",
    "Empowering Growth",
    "Innovative Simplicity",
    "Scalable Solutions",
    "Reliable Performance",
    "Global Reach"
];
