import { useCallback, useEffect, useMemo, useState } from "react";

const mediaQueries = {
	mediaMobile: window.matchMedia("only screen and (max-width: 600px)"),
	mediaMobileSmall: window.matchMedia("only screen and (max-width: 340px)"),
	mediaMobileMedium: window.matchMedia(
		"only screen and (min-width: 341px) and (max-width: 400px)",
	),
	mediaMobileLarge: window.matchMedia(
		"only screen and (min-width: 401px) and (max-width: 600px)",
	),
	mediaTablet: window.matchMedia(
		"only screen and (min-width: 601px) and (max-width: 1200px)",
	),
	mediaTabletSmall: window.matchMedia(
		"only screen and (min-width: 601px) and (max-width: 900px)",
	),
	mediaTabletLarge: window.matchMedia(
		"only screen and (min-width: 901px) and (max-width: 1200px)",
	),
	mediaSmallViewport: window.matchMedia("only screen and (max-width: 1200px)"),
};

const getResponsive = () => ({
	isMobile: mediaQueries.mediaMobile.matches,
	isMobileSmall: mediaQueries.mediaMobileSmall.matches,
	isMobileMedium: mediaQueries.mediaMobileMedium.matches,
	isMobileLarge: mediaQueries.mediaMobileLarge.matches,
	isTablet: mediaQueries.mediaTablet.matches,
	isTabletSmall: mediaQueries.mediaTabletSmall.matches,
	isTabletLarge: mediaQueries.mediaTabletLarge.matches,
	isDeviceMobile: mediaQueries.mediaSmallViewport.matches,
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
