import { FC } from "react";
import { Marker } from "./types";
interface Props {
    content: string;
    number: number;
    marker: Marker;
    hideNumber: boolean;
}
declare const ViewCodeLine: FC<Props>;
export default ViewCodeLine;
