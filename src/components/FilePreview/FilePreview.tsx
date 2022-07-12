import React, { FC } from "react";

import { ViewCode, ViewCodeProps } from "../ViewCode";
import "./style.css";

export interface FilePreviewProps extends ViewCodeProps {
	fileName?: string;
	image?: string;
	nextValue: string;
	prevValue?: string;
	startNumber?: number;
	hideNumber?: string;
}

export const FilePreview: FC<FilePreviewProps> = (props) => {
	const { fileName, image, ...otherProps } = props;

	return (
		<div className="steps-preview" id="preview-file">
			{fileName && <div className="steps-preview__name">{fileName}</div>}
			{image && (
				<div className="steps-preview__image" style={{ textAlign: "center" }}>
					<img src={image} alt={fileName} style={{ maxWidth: "60%" }} />
				</div>
			)}
			<div className="steps-preview__code">
				<ViewCode {...otherProps} />
			</div>
		</div>
	);
};
