import { FC } from "react";
import { Step } from "../LessonSteps";
import "./style.css";
export interface LessonSectionProps {
    title: string;
    subtitle: string;
    description?: string;
    image_video_url?: string;
    steps?: Step[];
}
export declare const LessonSection: FC<LessonSectionProps>;
