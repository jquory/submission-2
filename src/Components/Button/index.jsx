import React, {useState} from "react";

const Button = (props) => {

    const [select, setSelect] = useState('')

    return(
        <>

        {select.includes(props.uri) ? (
        <button onClick={() => setSelect(select.filter((uri) => uri !== props.uri))}>Selected</button>
      ) : (
        <button onClick={() => setSelect([...select, props.uri])} >Select</button>
      )}
        </>
    )


}

export default Button