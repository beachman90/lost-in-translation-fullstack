import { useDispatch, useSelector } from "react-redux"
import Header from "../components/header/header"
import { setTranslations } from "../store/reducer"
import { storeNewTranslation } from "../utils/api"
import "./Profile.css"

const Profile = (props) => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.data.userId)
  const translations = useSelector((state) => state.data.translations)

  let translationComponents = []
  for (let i = 0; i < translations.length; i++) {
    translationComponents.push(
      <li key={translations[i] + i}>{translations[i]}</li>
    )
  }

  const clearTranslations = () => {
    dispatch(setTranslations([]))
    storeNewTranslation(userId, [])
  }

  return (
    <div>
      <Header />
      <div className="profile-components">
        <ul className="translations">{translationComponents}</ul>
        <img className="profile-image" src="./resources/DK.png" />
      </div>
      <button className="translate-button" onClick={clearTranslations}>
        Delete translations
      </button>
    </div>
  )
}

export default Profile
