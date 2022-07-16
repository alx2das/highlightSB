import { useMemo, FC } from "react";
import "./style.css";


export const LayoutViewCode: FC = ({ children }) => {
    const styles = useMemo(() => ({

    }), []);

    return (
        <div style={styles}>
            {children}
        </div>
    );
};

export const LayoutLessonSection: FC = ({ children }) => {
    const styles = useMemo(() => ({

    }), []);

    return (
        <div className="layout" style={styles}>
            {children}
        </div>
    );
};