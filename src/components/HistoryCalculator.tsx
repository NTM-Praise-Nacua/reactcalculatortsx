import { useContext } from 'react'
import { MainContext } from '../providers/MainProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const HistoryCalculator = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("MainContext must be used within a Provider")
  }

  const { calculationHistory, setCalculationHistory } = context;

  const getOperatorIcon = (operator: string): IconDefinition => {
    switch(operator) {
        case '-':
            return faMinus;
        case '*':
            return faXmark;
        case '/':
            return faDivide;
        default:
            return faPlus;
    }
  }

  return (
    <div className='h-full overflow-y-auto flex flex-col-reverse relative'>
      <ul className=''>
        {
          calculationHistory.length > 0 ? (
            calculationHistory.map((item, index) => {
              const isLast = index == (calculationHistory.length - 1);
              const operatorIcon = getOperatorIcon(item.operator);
              return (
                <li key={index} className={`${isLast ? 'text-4xl font-bold text-black':'text-2xl text-gray-500'} font-mono text-end mb-2 mr-4 flex flex-col`}>
                  <span className={`${isLast ? 'text-lg' : 'text-xs'}`}>{item.input1} <FontAwesomeIcon icon={operatorIcon} size='xs' /> {item.input2} =</span>
                  <p>{item.result}</p>
                </li>
              )
            })
          ) : (
            <li className='text-4xl font-bold font-mono text-end mb-2 mr-4'>0</li>
          )
        }
      </ul>
      {calculationHistory.length > 0 && (
        <button type='button' className='clearhistory-btn' onClick={() => setCalculationHistory([])}>Clear History</button>
      )}
    </div>
  )
}

export default HistoryCalculator