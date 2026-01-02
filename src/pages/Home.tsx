import { useState } from 'react'
import Input from '../components/Input';
import HistoryCalculator from '../components/HistoryCalculator';
import ButtonOperator from '../components/ButtonOperator';
import LogoutButton from '../components/auth/LogoutButton';

interface InputType {
    input1: number;
    input2: number;
}

const Home = () => {
    const [input, setInput] = useState<InputType>({
        input1: 0,
        input2: 0,
    });

    return (
        <>
            <div className="border rounded shadow-lg w-1/2 p-5 flex flex-col justify-center items-center relative">
                <div className='border mb-3 w-full inset-shadow-sm rounded bg-slate-200 h-48 p-3'>
                    <HistoryCalculator />
                </div>
                <div className='flex space-x-3 items-center mb-3 w-full'>
                    <Input setInput={setInput} name="input1" />
                    <Input setInput={setInput} name="input2" />
                </div>
                <div className='space-x-3 w-8/10 mb-3'>
                    <ButtonOperator input={input} operator={'+'} />
                    <ButtonOperator input={input} operator={'-'} />
                    <ButtonOperator input={input} operator={'*'} />
                    <ButtonOperator input={input} operator={'/'} />
                </div>
                <LogoutButton className="absolute bottom-3 right-3 btn-sm" /> 
            </div>
        </>
    )
}

export default Home