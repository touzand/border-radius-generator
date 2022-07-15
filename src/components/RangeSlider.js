import React ,{useState}from "react"

function RangeSlider({defaultValue,setDefaultValue,onChange,vertical}){

return(
<input type='range' min='0' max='100' defaultValue={defaultValue} onChange={onChange}/>
)
}

export default RangeSlider
