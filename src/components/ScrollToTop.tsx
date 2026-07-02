import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            window.setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 0);
            return;
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
