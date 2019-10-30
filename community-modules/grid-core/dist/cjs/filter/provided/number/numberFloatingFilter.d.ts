// Type definitions for @ag-community/grid-core v22.0.0-beta.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { NumberFilterModel } from "./numberFilter";
import { TextInputFloatingFilter } from "../../floating/provided/textInputFloatingFilter";
export declare class NumberFloatingFilter extends TextInputFloatingFilter {
    protected getDefaultFilterOptions(): string[];
    protected conditionToString(condition: NumberFilterModel): string;
}