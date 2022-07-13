import { ReactNode } from "react";
export declare type SectionType = {
    title: string;
    subtitle: string;
    description: string | ReactNode;
    source?: SourceType;
    steps?: StepType[];
};
export declare type SourceType = {
    url?: string;
    type?: string;
    node?: ReactNode;
};
export declare type StepType = {
    id: string;
    title: string;
    description?: string | ReactNode;
    comment?: string | ReactNode;
    fileName?: string;
    fileContent?: string;
    source?: SourceType;
};
