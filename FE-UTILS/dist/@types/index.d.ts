declare module "#not-for-import/feUtils/store/types" {
    export type Tab = {
        label: string;
        path: string;
        module: "creditos" | "dashboard";
    };
    export type LabelsStore = {
        appTabs: Tab[];
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
    type NavTabsProps = {
        tabs: Tab[];
        align?: "start" | "center" | "end";
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
declare module "feUtils/useExcelExport" {
    export const useExcelExport: () => {
        exportToExcel: (data: any[], defaultFilename?: string) => Promise<void>;
    };
}
