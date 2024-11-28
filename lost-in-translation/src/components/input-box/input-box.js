import { useState } from 'react';
import './input-box.css';

const InputBox = (props) => {
  const [value, setValue] = useState("");

  const submit = () => {
    props.onSubmit(value);
  }

  const onKeyDown = (event) => {
    if(event.keyCode === 13) {
      props.onSubmit(value);
    }
  }

  return (
    <div className="input-box-container">
      <input className="input-box" type="text" placeholder={props.placeholder} onChange={(event) => setValue(event.target.value)} onKeyDown={onKeyDown} />
      <div className="input-box-arrow" onClick={submit}></div>
    </div>
  )
}

export default InputBox;