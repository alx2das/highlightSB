import { FC } from "react";
import "./style.css";
export declare type Step = {
    name: string;
    description: string;
    comment: string;
    code_title: string;
    code: string;
    image_video_url: string;
};
export interface LessonStepsProps {
    steps: Step[];
}
export declare const LessonSteps: FC<LessonStepsProps>;
