
import React, { createContext, useContext } from 'react';




export const sidebarContextnew = createContext({
    collapsed: false,
    setIsCollapsed: () => { },
})
export const useSidebarContext = () => {
    return useContext(sidebarContextnew);
}



// export const CollapseContext = createContext();

// export const CollapseProvider = ({ children }) => {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
//             {children}
//         </CollapseContext.Provider>
//     );
// };