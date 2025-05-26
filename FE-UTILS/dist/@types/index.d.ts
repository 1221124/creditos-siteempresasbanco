declare module "feUtils/useLabelsStore" {
    export const useLabelsStore: any;
}
declare module "feUtils/Error" {
    import React from "react";
    interface ErrorProps {
        message: string;
    }
    const Error: React.FC<ErrorProps>;
    export default Error;
}
declare module "feUtils/Loading" {
    import React from "react";
    const Loading: React.FC;
    export default Loading;
}
declare module "feUtils/NavTabs" {
    import React from "react";
    interface NavTabsProps {
        tabs: {
            label: string;
            path: string;
        }[];
        align?: "start" | "center" | "end";
        topLevel?: boolean;
    }
    const NavTabs: React.FC<NavTabsProps>;
    export default NavTabs;
}
declare module "feUtils/PdfPreview" {
    const PdfPreview: ({ fileUrl }: {
        fileUrl: string;
    }) => import("react/jsx-runtime").JSX.Element;
    export default PdfPreview;
}
