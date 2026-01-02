import { createContext, useEffect, useState, type ReactNode } from 'react'

export const MainContext = createContext<MainContextType | null>(null);

interface MainProviderProp {
  children: ReactNode
}

interface UserCredentialsType {
  username: string,
  password: string,
}

interface CalculationHistoryType {
  input1: number,
  input2: number,
  result: number,
  operator: string,
}

interface MainContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  calculationHistory: CalculationHistoryType[];
  setCalculationHistory: React.Dispatch<React.SetStateAction<CalculationHistoryType[]>>;
  userCredentials: UserCredentialsType;
  setUserCredentials: React.Dispatch<React.SetStateAction<UserCredentialsType>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainProvider = ({ children }: MainProviderProp) => {
  const [count, setCount] = useState<number>(0);
  const [calculationHistory, setCalculationHistory] = useState<CalculationHistoryType[]>([]);
  const [userCredentials, setUserCredentials] = useState<UserCredentialsType>({
    username: '',
    password: '',
  });
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setUserCredentials({
      username: 'admin',
      password: '1234',
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        count,
        setCount,
        calculationHistory,
        setCalculationHistory,
        userCredentials,
        setUserCredentials,
        isValid,
        setIsValid,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider