import { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../providers/MainProvider'

interface Inputs {
  input1: number;
  input2: number;
}

interface InputPropType {
  setInput: React.Dispatch<React.SetStateAction<Inputs>>,
  name: string
}

const Input = ({ setInput, name }: InputPropType) => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("MainContext must be used within a Provider");
  }

  const { calculationHistory } = context;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (calculationHistory.length == 0) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [calculationHistory]);

  return (
    <input type="text"
        ref={inputRef}
        placeholder={`Enter ${name == 'input1' ? 'first' : 'second'} number`}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInput(prev => ({...prev, [name]: Number(e.target.value)}))}
        className='border rounded px-3 py-1 w-[80%]'
    />
  )
}

export default Input