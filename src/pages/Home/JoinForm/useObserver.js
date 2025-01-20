import { useEffect } from 'react';

export const useObserver = (ref, callback, options) => {
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            callback(entry.isIntersecting);
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, callback, options]);
};
