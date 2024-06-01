import { createContext, useState } from "react";


export const cartcontext = createContext(null);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
    
//     return (
//       <cartcontext.Provider value={{ cart, setCart }}>
//         {children}
//       </cartcontext.Provider>
//     );
//   };