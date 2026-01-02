import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../providers/MainProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface InputType {
    input1: number;
    input2: number;
}

interface ButtonOperatorProp {
    operator: string;
    input: InputType;
}

const ButtonOperator = ({ operator, input }: ButtonOperatorProp) => {
    const [operatorIcon, setOperatorIcon] = useState<IconDefinition>(faPlus);
    const context = useContext(MainContext);

    if (!context) {
        throw new Error("MainContext must be used within Provider.")
    }

    const { setCount, setCalculationHistory } = context;

    const [operatorColor, setOperatorColor] = useState<string>('border-black')

    const compute: () => void = () => {
        if (input.input1 == 0 || input.input2 == 0) return;

        let result = 0;
        switch(operator) {
            case '+':
                result = input.input1 + input.input2;
                break;
            case '-':
                result = input.input1 - input.input2;
                setOperatorIcon(faMinus);
                break;
            case '*':
                result = input.input1 * input.input2;
                setOperatorIcon(faXmark);
                break;
            case '/':
                result = input.input1 / input.input2;
                setOperatorIcon(faDivide);
                break;
        }

        setCount(result);

        setCalculationHistory(prev => ([
            ...prev,
            {
                input1: input.input1,
                input2: input.input2,
                operator: operator,
                result: result
            }
        ]));
    }

    useEffect(() => {
        switch(operator) {
            case '+':
                setOperatorIcon(faPlus);
                setOperatorColor('bg-green-500');
                break;
            case '-':
                setOperatorIcon(faMinus);
                setOperatorColor('bg-red-500');
                break;
            case '*':
                setOperatorIcon(faXmark);
                setOperatorColor('bg-orange-500');
                break;
            case '/':
                setOperatorIcon(faDivide);
                setOperatorColor('bg-blue-500');
                break;
        }
    }, [])

  return (
    <button type="button" onClick={() => compute()} className={`border text-white w-10 h-10 box-border rounded shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-transform ease-in-out ${operatorColor}`}>
        <FontAwesomeIcon icon={operatorIcon} className='highlight' />
    </button>
  )
}

export default ButtonOperator