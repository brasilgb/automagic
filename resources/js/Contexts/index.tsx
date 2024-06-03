import { DayRange } from "@hassanmojab/react-modern-calendar-datepicker";
import moment, { now } from "moment";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({} as any);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [dataInicial, setDataInicial] = useState(new Date());
    const [dataFinal, setDataFinal] = useState(new Date());
    const [selectedRange, setSelectedRange] = useState<DayRange>({
        from: null,
        to: null,
    });

    return (
        <AuthContext.Provider
            value={{
                dataInicial, 
                setDataInicial,
                dataFinal, 
                setDataFinal,
                selectedRange, 
                setSelectedRange,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);