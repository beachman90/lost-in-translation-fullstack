import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CheckAuth = (props) => {
  const userId = useSelector((state) => state.data.userId);
  if(userId > 0 && props.requiresAuth)
    return props.children
  else if (userId === 0 && !props.requiresAuth)
    return  props.children;
  return <Navigate to={props.failedRoute} />
}

export default CheckAuth;