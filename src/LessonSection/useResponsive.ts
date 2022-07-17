import { useMemo } from "react";

const useResponsive = () => {
	return useMemo(
		() => ({
			isMobile: window.innerWidth < 600,
		}),
		[window.innerWidth],
	);
};

export default useResponsive;
