import React,{useState} from 'react'
import Proptypes from 'prop-types';

export default function AddCategory(props) {

    const {setCategories}=props;

    const [inputValue, setinputValue] = useState('')

    const handleInputChange=(e)=>{
        //setinputValue(e.target.value)
        setinputValue(e.target.value);
    }

    const hadleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
        setCategories(catego=>[inputValue,...catego])
        setinputValue("")
        }

        
        console.log("submit hecho")
    }

    return (
        <form onSubmit={hadleSubmit}>        
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>
    )
}


AddCategory.propTypes={
    setCategories:Proptypes.func.isRequired
}