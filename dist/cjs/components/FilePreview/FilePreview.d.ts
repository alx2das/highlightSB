import { FC } from "react";
import { ViewCodeProps } from "../ViewCode";
import "./style.css";
export interface FilePreviewProps extends ViewCodeProps {
    fileName?: string;
    image?: string;
    nextValue: string;
    prevValue?: string;
    startNumber?: number;
    hideNumber?: string;
}
export declare const FilePreview: FC<FilePreviewProps>;