import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

export const ProtectedRoute = ({children}: {children: JSX.Element}) => {
  const isAuth = useAppSelector((state) => state.user.auth)
  const navigate = useNavigate()
  
  return isAuth ? children : navigate('/login')
}