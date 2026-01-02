import { useEffect, useState } from 'react'

interface MessageModalProp {
    className?: string,
    message?: string,
    handleUnmount: () => void,
}

const MessageModal = ({ className = '', message = '', handleUnmount }: MessageModalProp) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClick: () => void = () => {
        setIsVisible(false);
        setTimeout(() => {
            handleUnmount();
        }, 300);
    }

  return (
    <div className={`transition-opacity ease-in-out opacity-0 ${isVisible && 'opacity-100'} absolute top-0 left-0 w-full h-full bg-black/15 z-10 flex justify-center items-center`} onClick={handleClick}>
        <div className={`border border-gray-200 shadow rounded-md p-4 bg-white h-auto w-62 text-left horizontal-shaking ${className}`}>{message}</div>
    </div>
  )
}

export default MessageModal