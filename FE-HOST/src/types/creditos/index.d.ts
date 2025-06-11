declare module "#not-for-import/feCreditos/components/SearchInput" {
    import React from "react";
    type SearchInputProps = {
        placeholder: string;
        onSearch: (value: string) => void;
    };
    const SearchInput: React.FC<SearchInputProps>;
    export default SearchInput;
}
declare module "#not-for-import/feCreditos/components/ExportButton" {
    import React from "react";
    interface ExportButtonProps {
        data: any[];
    }
    const ExportButton: React.FC<ExportButtonProps>;
    export default ExportButton;
}
declare module "#not-for-import/feCreditos/components/SearchAndExportBar" {
    type SearchAndExportBarProps<T extends {
        beneficiario: string;
    }> = {
        placeholder: string;
        data: T[];
        setData: (newData: T[]) => void;
    };
    const SearchAndExportBar: <T extends {
        beneficiario: string;
    }>({ placeholder, data, setData, }: SearchAndExportBarProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default SearchAndExportBar;
}
declare module "#not-for-import/feCreditos/types/types" {
    export type Garantia = {
        beneficiario: string;
        local: string;
        operacao: number;
        dataInicial: string;
        dataFinal: string;
        montante: string;
        extra: {
            encargoAnual: string;
            intervaloCobranca: string;
            debitoAgendado: string;
            contaOrigem: number;
        };
    };
    export type CreditoDocImport = {
        beneficiario: string;
        local: string;
        operacao: number;
        dataInicial: string;
        dataFinal: string;
        montante: string;
        responsabilidade: string;
    };
    export type Documento = {
        date: string;
        nome: string;
        pdf: string;
    };
    export type CreditWalletCard = {
        title: string;
        operations: number;
        amount: string;
    };
}
declare module "#not-for-import/feCreditos/hooks/useEmailSender" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    type UseEmailSenderProps = {
        documents: Documento[];
        bodyText: string;
        subject: string;
    };
    export function useEmailSender({ documents, bodyText, subject, }: UseEmailSenderProps): {
        sendEmail: () => void;
    };
}
declare module "#not-for-import/feCreditos/screens/tabs/Documents" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    import React from "react";
    type DocumentsProps = {
        data: Documento[];
    };
    const Documents: React.FC<DocumentsProps>;
    export default Documents;
}
declare module "#not-for-import/feCreditos/components/Invoices" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    type InvoicesProps = {
        data: Documento[];
        show: boolean;
        setShow: (value: boolean) => void;
    };
    const Invoices: ({ data, show, setShow }: InvoicesProps) => import("react/jsx-runtime").JSX.Element | null;
    export default Invoices;
}
declare module "#not-for-import/feCreditos/components/CardItem" {
    import React from "react";
    type CardItemProps = {
        title: string;
        value: string | number;
        isPercentage?: boolean;
        isCurrency?: boolean;
        bordered?: boolean;
        start?: boolean;
        end?: boolean;
    };
    const CardItem: React.FC<CardItemProps>;
    export default CardItem;
}
declare module "#not-for-import/feCreditos/components/ExpandableInfo" {
    import React from "react";
    import { Documento } from "#not-for-import/feCreditos/types/types";
    type ExpandableInfoProps = {
        headers: string[];
        data: any;
        invoices: Documento[];
        loading: boolean;
        error: string | null;
    };
    const ExpandableInfo: React.FC<ExpandableInfoProps>;
    export default ExpandableInfo;
}
declare module "#not-for-import/feCreditos/api/config" {
    export const ENDPOINTS: {
        creditosDocImport: string;
        documentos: string;
        faturas: string;
        garantias: string;
    };
}
declare module "#not-for-import/feCreditos/services/RESTAdapter" {
    export function get<T>(endpoint: string): Promise<T[]>;
}
declare module "#not-for-import/feCreditos/hooks/useFetchData" {
    export function useFetchData<T>(endpoint: string): {
        data: T[];
        loading: boolean;
        error: string;
    } | {
        data: T[];
        loading: boolean;
        error: null;
    };
}
declare module "#not-for-import/feCreditos/components/TableComponent" {
    import React from "react";
    import { Documento } from "#not-for-import/feCreditos/types/types";
    type TableComponentProps = {
        headers: string[];
        data: any[];
        selectedDocuments?: Documento[];
        setSelectedDocuments?: React.Dispatch<React.SetStateAction<Documento[]>>;
    };
    const TableComponent: ({ headers, data, selectedDocuments, setSelectedDocuments, }: TableComponentProps) => import("react/jsx-runtime").JSX.Element;
    export default TableComponent;
}
declare module "#not-for-import/feCreditos/hooks/useCalculateAmount" {
    import { Garantia, CreditoDocImport } from "#not-for-import/feCreditos/types/types";
    type UseCalculateAmountResult = {
        numberOfOperations: number;
        nationalTotal: number;
        internationalTotal: number;
    };
    export function useCalculateAmount<T extends Garantia | CreditoDocImport>(data: T[]): UseCalculateAmountResult;
}
declare module "#not-for-import/feCreditos/components/OperationsSummary" {
    import React from "react";
    import { Garantia } from "#not-for-import/feCreditos/types/types";
    type OperationsSummaryProps = {
        data: Garantia[];
    };
    const OperationsSummary: React.FC<OperationsSummaryProps>;
    export default OperationsSummary;
}
declare module "#not-for-import/feCreditos/screens/tabs/Details" {
    type DetailsProps<T> = {
        headers: string[];
        data: T[];
        showOperationsSummary: boolean;
    };
    const Details: <T extends {
        beneficiario: string;
    }>({ headers, data, showOperationsSummary, }: DetailsProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default Details;
}
declare module "#not-for-import/feCreditos/screens/garantias.screen" {
    import React from "react";
    import { Garantia } from "#not-for-import/feCreditos/types/types";
    type GarantiasScreenProps = {
        garantiasData: Garantia[];
    };
    const GarantiasScreen: React.FC<GarantiasScreenProps>;
    export default GarantiasScreen;
}
declare module "#not-for-import/feCreditos/screens/creditosDocImportacao.screen" {
    import React from "react";
    import { CreditoDocImport } from "#not-for-import/feCreditos/types/types";
    type CreditosDocImportacaoScreenProps = {
        creditosData: CreditoDocImport[];
    };
    const CreditosDocImportacaoScreen: React.FC<CreditosDocImportacaoScreenProps>;
    export default CreditosDocImportacaoScreen;
}
declare module "#not-for-import/feCreditos/components/CreditWallet" {
    import React from "react";
    import { CreditWalletCard } from "#not-for-import/feCreditos/types/types";
    type CreditWalletProps = {
        cards: CreditWalletCard[];
    };
    const CreditWallet: React.FC<CreditWalletProps>;
    export default CreditWallet;
}
declare module "#not-for-import/feCreditos/hooks/useCreditWalletCards" {
    import { Garantia, CreditoDocImport, CreditWalletCard } from "#not-for-import/feCreditos/types/types";
    type UseCreditWalletCardsResult = {
        loading: boolean;
        error: string | null;
        garantiasData: Garantia[];
        creditosData: CreditoDocImport[];
        cards: CreditWalletCard[];
    };
    export function useCreditWalletCards(): UseCreditWalletCardsResult;
}
declare module "creditos/App" {
    import "bootstrap/dist/css/bootstrap.min.css";
    import "utils/styles";
    export default function App(): import("react/jsx-runtime").JSX.Element;
}
