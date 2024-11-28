import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setName, setUserId } from "../../store/reducer"
import "./header.css"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useSelector((state) => state.data.name)
  const userId = useSelector((state) => state.data.userId)

  const logOut = () => {
    dispatch(setUserId(0))
    navigate("/")
    dispatch(setName(""))
  }
  return (
    <div className="header">
      <div className="content-limiter header-info">
        <Link to="/">
          <h1 className="header-text">Lost in translation</h1>
        </Link>
        <div>
          <Link to="/profile">
            <div className="profile-name">{name}</div>
          </Link>
          {userId != 0 && (
            <button onClick={logOut} className="log-out-button">
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
