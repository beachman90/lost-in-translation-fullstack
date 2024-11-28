import "./Home.css"
import InputBox from "../components/input-box/input-box"
import { useSelector, useDispatch } from "react-redux"
import { setInitialUser, setName } from "../store/reducer"
import Header from "../components/header/header"
import { checkIfUserExisted, createNewUser } from "../utils/api"
import { useNavigate } from "react-router-dom"

function Home() {
  const name = useSelector((state) => state.data.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (value) => {
    console.log(value)

    checkIfUserExisted(value).then((result) => {
      console.log(result)
      if (result.length > 0) {
        console.log("User existed")
        console.log(result[0])
        dispatch(setInitialUser(result[0]))
        navigate("/translate")
      } else {
        createNewUser(value)
          .then((newUser) => {
            console.log("Created a new user named " + value)
            console.log(newUser)
            dispatch(setInitialUser(newUser))
            navigate("/translate")
          })
          .catch((err) => {
            console.log("Error creating new user")
            // TODO: Handle error by displaying error message
          })
      }
    })

    dispatch(setName(value))
  }

  return (
    <div id="home">
      <Header />
      <div className="hero">
        <div className="background">
          <div className="content-limiter flex-components">
            <div className="graphics">
              <img className="home-image" src="./resources/Logo-Hello.png" />
              Lost in translation
              <br />
              <br></br>
              Get started
            </div>

            <div className="component">
              <InputBox placeholder="What's your name?" onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
