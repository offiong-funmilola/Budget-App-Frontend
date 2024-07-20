import { createContext,  useContext } from "react";
import { UtilityType  } from "../../type";


const UtilityContext = createContext<UtilityType | null>(null)

export const UtilityProvider = ({children}: {children: JSX.Element }) => {
    const clearStorage = () => {
        localStorage.removeItem("user");
        //localStorage.removeItem("recordId");
      };
    
      const captalizeFistletter = (str: string) => {
        let firstLetter = str.charAt(0);
        let otherLetters = str.slice(1);
        firstLetter = firstLetter.toUpperCase();
        return firstLetter.concat(otherLetters);
      };
      
    return (
        <UtilityContext.Provider
            value={{
                clearStorage,
                captalizeFistletter
            }}
        >
            {children}
        </UtilityContext.Provider>
    )
}

export const useUtilityContext = () => {
    const utilityContext = useContext(UtilityContext) as UtilityType
    return utilityContext
 }


