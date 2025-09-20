import { useState } from "react"

const useInput = (defaultValue) => {

    const [fieldName, setFieldName] = useState(defaultValue);

    const handleFieldOnChange = e => {
        setFieldName(e.target.value);
    }
    return [fieldName, handleFieldOnChange];
}

export default useInput;