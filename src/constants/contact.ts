import { PhoneIcon, MailIcon, MapPinIcon, CalendarIcon } from "lucide-react";

export const CONTACT_CARDS = [
    // {
    //     title: "Phone Number",
    //     value: "+1 (123) 456-7890",
    //     icon: PhoneIcon
    // },
    // {
    //     title: "Preflyte Addr.",
    //     value: "Singapore",
    //     icon: MapPinIcon
    // },
    {
        title: "Email Address",
        value: "team@preflyte.io",
        type: "email",
        icon: MailIcon
    },
    {
        title: "Book a Call",
        value: "https://cal.com/preflyte/preflyte-demo",
        type: "btn",
        icon: CalendarIcon
    }
] as const;
