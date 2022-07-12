import { FC } from "react";
import "./style.css";
export interface ViewCodeProps {
    nextValue: string;
    prevValue?: string;
    startNumber?: number;
    hideNumber?: string;
}
declare const ViewCode: FC<ViewCodeProps>;
export default ViewCode;
