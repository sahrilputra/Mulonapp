
import React, { createContext, useContext, useState } from 'react';

export const sidebarContextnew = createContext({
    collapsed: false,
    setCollapsed: () => { },
});

export const useSidebarContext = () => {
    return useContext(sidebarContextnew);
}

export const SidebarContextProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const setIsCollapsed = (value) => {
        setCollapsed(value);
    };

    return (
        <sidebarContextnew.Provider value={{ collapsed, setCollapsed: setIsCollapsed }}>
            {children}
        </sidebarContextnew.Provider>
    );
};