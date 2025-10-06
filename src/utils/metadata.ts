import { Metadata } from "next";

type GenerateMetadataParams = {
    title?: string;
    description?: string;
    path?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
};

export const generateMetadata = ({
    title,
    description = "",
    path = "/",
    image = "/thumbnail.png",
    icons = [
        { rel: "apple-touch-icon", sizes: "32x32", url: "/icons/icon.svg" },
        { rel: "icon", sizes: "32x32", url: "/icons/icon.svg" },
    ],
    noIndex = false,
    keywords = [],
}: GenerateMetadataParams = {}): Metadata => {
    const siteName = process.env.NEXT_PUBLIC_APP_NAME || "Preflyte";
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const metadataBase = appUrl ? new URL(appUrl) : undefined;

    const resolvedTitle = title ? `${title}` : undefined;
    const ogTitle = title ? `${title} | ${siteName}` : siteName;
    const imageUrl = metadataBase ? new URL(image || "/thumbnail.png", metadataBase).toString() : (image || "/thumbnail.png");

    const base: Metadata = {
        ...(metadataBase ? { metadataBase } : {}),
        title: resolvedTitle ?? { default: siteName, template: `%s | ${siteName}` },
        description,
        icons,
        keywords,
        alternates: {
            canonical: path,
        },
        openGraph: {
            type: "website",
            url: path,
            siteName,
            title: ogTitle,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description,
            images: imageUrl ? [imageUrl] : undefined,
        },
        ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    };

    return base;
};
