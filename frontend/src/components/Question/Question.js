import React from 'react';
import './Question.css'

function Question({type, title, name, value, input, handleChange, values, setValues}) {

  React.useEffect(()=>{
    if (type === 'checkbox') {
      setValues({ ...values, [name]: []});
    }
  },[])

  return (
    <div className="questions__wrapper">
      <h2 className="questions__title">{title}</h2>
      {(type === 'radio' || type === 'checkbox') ?
      <>
        <label className="questions__label">
          <input className="questions__input" name={name} type={type} value={value[0]} required={type === 'radio'} onChange={handleChange}/>
          {input[0]}
        </label>

        <label className="questions__label">
          <input className="questions__input" name={name} type={type} value={value[1]} required={type === 'radio'} onChange={handleChange}/>
          {input[1]}
        </label>

        <label className="questions__label">
          <input className="questions__input" name={name} type={type} value={value[2]} required={type === 'radio'} onChange={handleChange}/>
          {input[2]}
        </label>

        <label className="questions__label">
          <input className="questions__input" name={name} type={type} value={value[3]} required={type === 'radio'} onChange={handleChange}/>
          {input[3]}
        </label>

        <label className="questions__label">
          <input className="questions__input" name={name} type={type} value={value[4]} required={type === 'radio'} onChange={handleChange}/>
          {input[4]}
        </label>
      </> :
      <>
        <input className="questions__input questions__input_type_text" name={name} type={type} value={values.name || ''} onChange={handleChange} required/>
      </>
      }
    </div>
  )
}

export default Question;
