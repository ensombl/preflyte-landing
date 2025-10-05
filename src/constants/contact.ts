import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+1 (123) 456-7890",
        icon: PhoneIcon
    },
    {
        title: "Preflyte Addr.",
        value: "Singapore",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "team@preflyte.io",
        icon: MailIcon
    }
] as const;
