import React, { createContext, useEffect, useRef, useState } from 'react';

export const ScrollContext = createContext({});

export function ScrollListener({ children }) {
    const [containerViewProps, setContainerViewProps] = useState({});
    const containerRef = useRef();

    useEffect(() => {
        // containerRef.current.addEventListener('scroll', e => {
        //     // console.log(e);
        // }, false);
    }, []);

    return (
        <div ref={containerRef} className={`page-container`}>
            <ScrollContext.Provider value={containerViewProps}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
}
