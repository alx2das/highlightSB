export const prevValue = `{
    "@babel/core": "^7.18.6",
    "@storybook/addon-actions": "^6.5.9",
    "@storybook/addon-essentials": "^6.5.9",
    "@storybook/addon-interactions": "^6.5.9",
    "@storybook/addon-links": "^6.5.9",
    "@storybook/builder-webpack4": "^6.5.9",
    "@storybook/manager-webpack4": "^6.5.9",
    "@storybook/react": "^6.5.9",
    "@storybook/testing-library": "^0.0.13",
    "@types/diff": "^5.0.2",
    "@types/node": "^18.0.3",
    "@types/react": "^17.0.47",
    "@types/react-dom": "^17.0.17",
    "babel-loader": "^8.2.5",
    "eslint-config-prettier": "^8.5.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3",
    "prettier": "^2.7.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript": "^4.7.4"
}`;
export const nextValue = `{
    "@babel/core": "^7.18.6",
    "@babel/cli": "^7.18.6",
    "@storybook/addon-actions": "^6.5.9",
    "@storybook/addon-essentials": "^6.5.9",
    "@storybook/addon-interactions": "^6.5.9",
    "@storybook/addon-links": "^6.5.9",
    "@storybook/builder-webpack4": "^6.5.9",
    "@storybook/manager-webpack4": "^6.5.9",
    "@storybook/react": "^6.5.9",
    "@storybook/testing-library": "^0.0.13",
    "babel-loader": "^8.2.5",
    "eslint-config-prettier": "^8.5.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3",
    "prettier": "^2.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^4.7.4"
}`;

export const query_sections = {
	lecture_sections: [
		{
			id: 1,
			title: "Load a Specific Reminder",
			description:
				"Today represents reminders using its internal Reminder model. Before writing reminder data to the event store, you need to retrieve the corresponding EKReminder object. In this section, write a new method that retrieves an EKReminder object for a given identifier.",
			image_video_url: "https://i.ya-webdesign.com/images/cellphone-png-2.png",
			lecture_steps: [
				{
					id: 1,
					name: "Название шага 1. Секция 1.",
					description: "Описание шага 1. Секция 1.",
					comment: "Коментарий",
					code_title: "НазваниеФайлаШаг1.swift",
					code: prevValue,
					position: 1,
					image_video_url:
						"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png",
				},
				{
					id: 2,
					name: "Название шага 2. Секция 1.",
					description: "Описание шага 2. Секция 1.",
					comment: "Коментарий",
					code_title: "НазваниеФайлаШаг2.swift",
					code: nextValue,
					position: 1,
					image_video_url: null,
				},
			],
		},
		{
			id: 2,
			title: "Секция 2",
			description: "Описание секции 2",
			image_video_url: "https://i.ya-webdesign.com/images/cellphone-png-2.png",
			lecture_steps: [
				{
					id: 3,
					name: "Название шага 1. Секция 2.",
					description: "Описание шага 1. Секция 2.",
					comment: "Коментарий",
					code_title: "НазваниеФайлаШаг1-2.swift",
					code: prevValue,
					position: 1,
					image_video_url:
						"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png",
				},
				{
					id: 4,
					name: "Название шага 2. Секция 2.",
					description: "Описание шага 2. Секция 2.",
					comment: "Коментарий",
					code_title: "НазваниеФайлаШаг2-2.swift",
					code: nextValue,
					position: 1,
					image_video_url: null,
				},
			],
		},
	],
};
