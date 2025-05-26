declare module "#not-for-import/feCreditos/components/SearchInput" {
    import React from "react";
    interface SearchInputProps {
        placeholder: string;
        onSearch: (value: string) => void;
    }
    const SearchInput: React.FC<SearchInputProps>;
    export default SearchInput;
}
declare module "#not-for-import/feCreditos/components/ExportButton" {
    import React from "react";
    const ExportButton: React.FC;
    export default ExportButton;
}
declare module "#not-for-import/feCreditos/components/SearchAndExportBar" {
    interface SearchAndExportBarProps<T extends {
        beneficiario: string;
    }> {
        placeholder: string;
        data: T[];
        setData: (newData: T[]) => void;
    }
    const SearchAndExportBar: <T extends {
        beneficiario: string;
    }>({ placeholder, data, setData, }: SearchAndExportBarProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default SearchAndExportBar;
}
declare module "#not-for-import/feCreditos/screens/tabs/Documents" {
    const Documents: ({ data }: {
        data: {
            date: string;
            nome: string;
        }[];
    }) => import("react/jsx-runtime").JSX.Element;
    export default Documents;
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
    };
}
declare module "#not-for-import/feCreditos/components/Invoices" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    interface InvoicesProps {
        data: Documento[];
        show: boolean;
        setShow: (value: boolean) => void;
    }
    const Invoices: ({ data, show, setShow }: InvoicesProps) => import("react/jsx-runtime").JSX.Element | null;
    export default Invoices;
}
declare module "#not-for-import/feCreditos/components/CardItem" {
    import React from "react";
    interface CardItemProps {
        title: string;
        value: string | number;
        isPercentage?: boolean;
        isCurrency?: boolean;
        bordered?: boolean;
        start?: boolean;
        end?: boolean;
    }
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
    export const BASE_URL = "https://q577l.wiremockapi.cloud/";
}
declare module "#not-for-import/feCreditos/services/RESTAdapter" {
    export function get<T>(endpoint: string): Promise<T[]>;
}
declare module "#not-for-import/feCreditos/hooks/generic/useFetchData" {
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
declare module "#not-for-import/feCreditos/api/endpoints" {
    export const ENDPOINTS: {
        creditosDocImport: string;
        documentos: string;
        faturas: string;
        garantias: string;
    };
}
declare module "#not-for-import/feCreditos/hooks/useFaturasFetch" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    export function useFaturasFetch(): {
        data: Documento[];
        loading: boolean;
        error: string | null;
    };
}
declare module "#not-for-import/feCreditos/components/TableComponent" {
    interface TableComponentProps {
        headers: string[];
        data: any[];
    }
    const TableComponent: ({ headers, data }: TableComponentProps) => import("react/jsx-runtime").JSX.Element;
    export default TableComponent;
}
declare module "#not-for-import/feCreditos/components/OperationsSummary" {
    import React from "react";
    import { Garantia } from "#not-for-import/feCreditos/types/types";
    interface OperationsSummaryProps {
        data: Garantia[];
    }
    const OperationsSummary: React.FC<OperationsSummaryProps>;
    export default OperationsSummary;
}
declare module "#not-for-import/feCreditos/screens/tabs/Details" {
    type DetailsProps<T> = {
        data: T[];
        isCreditoDocImportacao: boolean;
    };
    const Details: <T extends {
        beneficiario: string;
    }>({ data, isCreditoDocImportacao, }: DetailsProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default Details;
}
declare module "#not-for-import/feCreditos/hooks/useGarantiasFetch" {
    import { Garantia } from "#not-for-import/feCreditos/types/types";
    export function useGarantiasFetch(): {
        data: Garantia[];
        loading: boolean;
        error: string | null;
    };
}
declare module "#not-for-import/feCreditos/hooks/useDocumentosFetch" {
    import { Documento } from "#not-for-import/feCreditos/types/types";
    export function useDocumentosFetch(): {
        data: Documento[];
        loading: boolean;
        error: string | null;
    };
}
declare module "#not-for-import/feCreditos/screens/garantias.screen" {
    import React from "react";
    const GarantiasScreen: React.FC;
    export default GarantiasScreen;
}
declare module "#not-for-import/feCreditos/hooks/useCreditosDocImportFetch" {
    import { CreditoDocImport } from "#not-for-import/feCreditos/types/types";
    export function useCreditosDocImportFetch(): {
        data: CreditoDocImport[];
        loading: boolean;
        error: string | null;
    };
}
declare module "#not-for-import/feCreditos/screens/creditosDocImportacao.screen" {
    import React from "react";
    const CreditosDocImportacaoScreen: React.FC;
    export default CreditosDocImportacaoScreen;
}
declare module "feCreditos/App" {
    import "bootstrap/dist/css/bootstrap.min.css";
    export default function App(): import("react/jsx-runtime").JSX.Element;
}
