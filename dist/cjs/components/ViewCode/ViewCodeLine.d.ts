import { FC } from "react";
interface ViewCodeLineProps {
    line: string;
    number: number;
    marker: {
        added?: boolean;
        removed?: boolean;
    };
}
declare const ViewCodeLine: FC<ViewCodeLineProps>;
export default ViewCodeLine;
