import data_example from "./data";
import "./index.sass";

export const asyncQueryExample = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(data_example[0].steps[0].code), 0);
	});
};
