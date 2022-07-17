import type { Step } from "./types";

import { useMemo } from "react";


const useDataStep = (steps: Step[], step?: Step) => {
    return useMemo(() => {
        const sIndex = steps.findIndex((_step) => _step === step);
        const prevStep = (sIndex > 0 ? steps.slice(0, sIndex) : []).reduceRight(
            (accum: null | Step, _step) => {
                if (!accum && _step.fileName === step?.fileName) accum = _step;
                return accum;
            },
            null,
        );

        return {
            nextStep: step || undefined,
            prevStep: prevStep || undefined,
        };
    }, [steps, step]);
};

export default useDataStep;