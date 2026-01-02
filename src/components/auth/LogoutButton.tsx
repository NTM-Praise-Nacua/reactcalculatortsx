import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
  className?: string
}

const LogoutButton = ({ className = "" }: LogoutButtonProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.setItem('isLogged', JSON.stringify(false));

    navigate('/login', { replace: true });
  }

  return (
    <button type="button" className={`btn bg-red-700 text-white ${className}`} onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton