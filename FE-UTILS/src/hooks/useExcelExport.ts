import { useCallback } from "react";
import * as XLSX from "xlsx";
import { useLabelsStore } from "../store/useLabelsStore";

const flattenObject = (obj: any, prefix = ""): any => {
  return Object.keys(obj).reduce((acc, key) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObject(value, fullKey));
    } else {
      acc[fullKey] = value;
    }
    return acc;
  }, {} as any);
};

export const useExcelExport = () => {
  const errorOccuredLabel = useLabelsStore((state) => state.errorOccuredLabel);
  const defaultExcelFilename = useLabelsStore(state => state.defaultExcelFilename);

  const exportToExcel = useCallback(
    async (
      data: any[],
      defaultFilename = defaultExcelFilename
    ): Promise<boolean> => {
      if (!data || data.length === 0) {
        return false;
      }

      const flattenedData = data.map((item) => flattenObject(item));
      const worksheet = XLSX.utils.json_to_sheet(flattenedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet);

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      if ("showSaveFilePicker" in window) {
        try {
          const handle = await (window as any).showSaveFilePicker({
            suggestedName: defaultFilename,
            types: [
              {
                description: "Excel File",
                accept: {
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    [".xlsx"],
                },
              },
            ],
          });

          const writable = await handle.createWritable();
          await writable.write(blob);
          await writable.close();

          return true;
        } catch (err) {
          console.error(errorOccuredLabel, err);
          return false;
        }
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = defaultFilename;
        link.click();
        URL.revokeObjectURL(url);
        return true;
      }
    },
    [errorOccuredLabel, defaultExcelFilename]
  );

  return { exportToExcel };
};
