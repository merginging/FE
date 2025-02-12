import { useEffect, useRef, useState } from 'react';

const useVisibleAnimation = () => {
    const imagesRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = imagesRef.current.indexOf(entry.target);
                    if (entry.isIntersecting) {
                        setVisibleIndexes((prev) => {
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        });
                    } else {
                        setVisibleIndexes((prev) =>
                            prev.filter((i) => i !== index)
                        );
                    }
                });
            },
            { threshold: 0.5 }
        );

        imagesRef.current.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => {
            imagesRef.current.forEach((img) => {
                if (img) observer.unobserve(img);
            });
        };
    }, []);

    return { imagesRef, visibleIndexes };
};

export default useVisibleAnimation;
