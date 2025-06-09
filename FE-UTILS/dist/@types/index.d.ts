declare module "#not-for-import/feUtils/store/types" {
    export type Tab = {
        label: string;
        path: string;
        module: "creditos" | "dashboard";
    };
    export type InfoItem = {
        image?: string;
        text: string;
    };
    export type InfoSection = {
        title: string;
        items: InfoItem[];
    };
    export type LabelsStore = {
        walletTabs: Tab[];
        garantiasTabs: Tab[];
        creditosDocImportTabs: Tab[];
        garantiasHeaders: string[];
        creditosDocImportHeaders: string[];
        documentosHeaders: string[];
        operationsSummaryHeaders: string[];
        extraInfoHeaders: string[];
        beneficiarySearchLabel: string;
        exportLabel: string;
        seeInvoicesLabel: string;
        portugalLabel: string;
        loadingLabel: string;
        errorOccuredLabel: string;
        tryAgainLabel: string;
        apiErrorLabel: string;
        invoicesLabel: string;
        homeLabel: string;
        bankNameLabel: string;
        companyNameLabel: string;
        personNameLabel: string;
        exportToExcelLabel: string;
        exportToExcelSuccessLabel: string;
        exportToExcelErrorLabel: string;
        walletLabel: string;
        garantiasLabel: string;
        creditosDocImportLabel: string;
        garantiasPathLabel: string;
        creditosDocImportPathLabel: string;
        infoSections: InfoSection[];
    };
}
declare module "feUtils/useLabelsStore" {
    export const useLabelsStore: any;
}
declare module "feUtils/Error" {
    import React from "react";
    type ErrorProps = {
        message: string;
    };
    const Error: React.FC<ErrorProps>;
    export default Error;
}
declare module "feUtils/Loading" {
    import React from "react";
    const Loading: React.FC;
    export default Loading;
}
declare module "feUtils/HostedContext" {
    import React from "react";
    type HostedContextType = {
        hosted: boolean;
    };
    export const HostedProvider: React.FC<{
        hosted: boolean;
        children: React.ReactNode;
    }>;
    export function useHosted(): HostedContextType;
}
declare module "feUtils/NavTabs" {
    import React from "react";
    import { Tab } from "#not-for-import/feUtils/store/types";
    import "../styles/NavTabs.css";
    type NavTabsProps = {
        tabs: Tab[];
        tabsStyle: 1 | 2;
    };
    const NavTabs: React.FC<NavTabsProps>;
    export default NavTabs;
}
declare module "feUtils/PdfPreview" {
    const PdfPreview: ({ fileUrl }: {
        fileUrl: string;
    }) => import("react/jsx-runtime").JSX.Element;
    export default PdfPreview;
}
declare module "feUtils/SquareCard" {
    import React from "react";
    interface SquareCardProps {
        children: React.ReactNode;
        onSizeMeasured: (size: number) => void;
        uniformSize?: number;
    }
    const SquareCard: React.FC<SquareCardProps>;
    export default SquareCard;
}
declare module "feUtils/CardNavigator" {
    import React from "react";
    import { InfoSection } from "#not-for-import/feUtils/store/types";
    interface CardNavigatorProps {
        section: InfoSection;
        maxSize: number;
        onSizeMeasured: (size: number) => void;
    }
    const CardNavigator: React.FC<CardNavigatorProps>;
    export default CardNavigator;
}
declare module "feUtils/useExcelExport" {
    export const useExcelExport: () => {
        exportToExcel: (data: any[], defaultFilename?: string) => Promise<boolean>;
    };
}
