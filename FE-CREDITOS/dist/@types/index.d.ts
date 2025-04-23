declare module "#not-for-import/feCreditos/store/creditos.types" {
    export type Garantia = {
        beneficiario: string;
        local: string;
        operacao: number;
        dataInicial: string;
        dataFinal: string;
        montante: number;
        extra: {
            encargoAnual: number;
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
        montante: number;
        responsabilidade: number;
    };
}
declare module "#not-for-import/feCreditos/store/useGarantiasStore" {
    export const useGarantiasStore: any;
}
declare module "#not-for-import/feCreditos/components/CreditoTabs" {
    import React from "react";
    interface CreditoTabsProps {
        tabs: string[];
    }
    const CreditoTabs: React.FC<CreditoTabsProps>;
    export default CreditoTabs;
}
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
declare module "#not-for-import/feCreditos/components/ExpandableInfo" {
    import React from "react";
    interface ExpandableInfoProps {
        data: {
            encargoAnual: number;
            intervaloCobranca: string;
            debitoAgendado: string;
            contaOrigem: number;
        };
    }
    const ExpandableInfo: React.FC<ExpandableInfoProps>;
    export default ExpandableInfo;
}
declare module "#not-for-import/feCreditos/components/TableComponent" {
    interface TableComponentProps {
        headers: string[];
        data: any[];
        isCreditoDocImportacao: boolean;
        isCurrency?: boolean;
    }
    const TableComponent: ({ headers, data, isCreditoDocImportacao, isCurrency, }: TableComponentProps) => import("react/jsx-runtime").JSX.Element;
    export default TableComponent;
}
declare module "#not-for-import/feCreditos/components/ResumoOperacoes" {
    import React from "react";
    import { Garantia } from "#not-for-import/feCreditos/store/creditos.types";
    interface ResumoOperacoesProps {
        data: Garantia[];
    }
    const ResumoOperacoes: React.FC<ResumoOperacoesProps>;
    export default ResumoOperacoes;
}
declare module "#not-for-import/feCreditos/screens/tabs/Details" {
    type DetailsProps<T> = {
        data: T[];
        filteredData: T[];
        setFilteredData: (newData: T[]) => void;
        isCreditoDocImportacao: boolean;
    };
    const Details: <T extends {
        beneficiario: string;
    }>({ data, filteredData, setFilteredData, isCreditoDocImportacao, }: DetailsProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default Details;
}
declare module "feCreditos/GarantiasEAvales" {
    import React from "react";
    const GarantiasScreen: React.FC;
    export default GarantiasScreen;
}
declare module "#not-for-import/feCreditos/store/useCreditoDocImportStore" {
    export const useCreditoDocImportStore: any;
}
declare module "feCreditos/CreditosDocImportacao" {
    import React from "react";
    const CreditosDocImportacaoScreen: React.FC;
    export default CreditosDocImportacaoScreen;
}
