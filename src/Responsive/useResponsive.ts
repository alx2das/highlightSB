import { useCallback, useEffect, useMemo, useState } from "react";
import { queryMobile, queryTablet } from "./queries.json";

const mediaQueries = {
	mediaMobile: window.matchMedia(queryMobile),
	mediaTablet: window.matchMedia(queryTablet)
};

const getResponsive = () => ({
	isMobile: mediaQueries.mediaMobile.matches,
	isTablet: mediaQueries.mediaTablet.matches
});

const useResponsive = () => {
	const [responsive, setResponsive] = useState(getResponsive());
	const updateResponsive = useCallback(() => {
		setResponsive(getResponsive());
	}, []);

	useEffect(() => {
		for (const mediaType in mediaQueries) {
			const mediaQuery = mediaQueries[mediaType];
			mediaQuery.addEventListener("change", updateResponsive);
		}

		return () => {
			for (const mediaType in mediaQueries) {
				const mediaQuery = mediaQueries[mediaType];
				mediaQuery.removeEventListener("change", updateResponsive);
			}
		};
	}, []);

	return useMemo(() => responsive, [responsive]);
};

export default useResponsive;
