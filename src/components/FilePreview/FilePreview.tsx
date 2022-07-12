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
		<div className="tutorial-steps-preview" id="preview-file">
			{fileName && <div className="tutorial-steps-preview__name">{fileName}</div>}
			{image && (
				<div className="tutorial-steps-preview__image">
					<img src={image} alt={fileName} />
				</div>
			)}
			<div className="tutorial-steps-preview__code">
				<ViewCode {...otherProps} />
			</div>
		</div>
	);
};
