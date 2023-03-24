import { createContext } from 'react'

export const SucciContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    isConnected: false,
    setIsConnected: () => {},
    recap: true,
    setRecap: () => {},
    onAdd: () => {},
    onRemove: () => {},
    onDelete: () => {},
    emptyCart: () => {},
});

export default SucciContext;

// export const SucciProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [recap, setRecap] = useState(true);
//   const [isConnected, setIsConnected] = useState(false);

//   const contextValues = {
//     cartItems,
//     setCartItems,
//     recap,
//     setRecap,
//     isConnected,
//     setIsConnected,
//     onAdd: () => {},
//     onRemove: () => {},
//     onDelete: () => {},
//     emptyCart: () => {},
//   };

//   return <SucciContext.Provider value={contextValues}>{children}</SucciContext.Provider>
// };