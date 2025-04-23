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
declare module "#not-for-import/feCreditos/store/creditos.types" {
    export type Garantia = {
        beneficiario: string;
        local: string;
        operacao: number;
        dataInicial: string;
        dataFinal: string;
        montante: number;
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
declare module "#not-for-import/feCreditos/components/TableComponent" {
    import React from "react";
    import { CreditoDocImport, Garantia } from "#not-for-import/feCreditos/store/creditos.types";
    interface TableComponentProps {
        headers: string[];
        data: Garantia[] | CreditoDocImport[];
        isCurrency?: boolean;
    }
    const TableComponent: React.FC<TableComponentProps>;
    export default TableComponent;
}
declare module "#not-for-import/feCreditos/store/useGarantiasStore" {
    export const useGarantiasStore: any;
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
declare module "#not-for-import/feCreditos/components/CreditoTabs" {
    import React from "react";
    interface CreditoTabsProps {
        tabs: string[];
    }
    const CreditoTabs: React.FC<CreditoTabsProps>;
    export default CreditoTabs;
}
declare module "creditos/GarantiasEAvales" {
    import React from "react";
    const GarantiasScreen: React.FC;
    export default GarantiasScreen;
}
declare module "#not-for-import/feCreditos/store/useCreditoDocImportStore" {
    export const useCreditoDocImportStore: any;
}
declare module "#not-for-import/feCreditos/components/SearchAndExportBar" {
    interface SearchAndExportBarProps<T> {
        placeholder: string;
        data: T[];
        setData: (newData: T[]) => void;
    }
    const SearchAndExportBar: <T extends {
        beneficiario: string;
    }>({ placeholder, data, setData, }: SearchAndExportBarProps<T>) => import("react/jsx-runtime").JSX.Element;
    export default SearchAndExportBar;
}
declare module "creditos/CreditosDocImportacao" {
    import React from "react";
    const CreditosDocImportacaoScreen: React.FC;
    export default CreditosDocImportacaoScreen;
}
