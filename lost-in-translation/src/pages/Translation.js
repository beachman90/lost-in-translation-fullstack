import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/header/header"
import InputBox from "../components/input-box/input-box"
import { storeNewTranslation } from "../utils/api"
import { addTranslation } from "../store/reducer"
import "./Translation.css"

const Translate = (props) => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.data.userId)
  const translations = useSelector((state) => state.data.translations)
  let [output, setOutput] = useState(<></>)

  const onSubmit = (value) => {
    console.log(value)
    let formattedValue = value.replace(/[^a-z]/gi, "")

    let translation = []
    for (let i = 0; i < formattedValue.length; i++) {
      translation.push(
        <img src={`/resources/signs/${formattedValue[i].toLowerCase()}.png`} />
      )
    }
    let newTranslations = []
    if (Array.isArray(translations)) {
      newTranslations = translations.slice(0)
      newTranslations.push(value)
    } else {
      newTranslations = [value]
    }
    storeNewTranslation(userId, newTranslations)
    dispatch(addTranslation(value))
    setOutput(<>{translation}</>)
  }

  return (
    <div id="translate">
      <Header />
      <div className="translate-bg">
        <div className="content-limiter">
          <div className="translation-content">
            <img className="translate-image" src="./resources/Logo.png" />
            <InputBox placeholder="Text to translate" onSubmit={onSubmit} />
          </div>
          <div className="translation-content">{output}</div>
        </div>
      </div>
    </div>
  )
}

export default Translate
