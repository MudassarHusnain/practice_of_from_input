import React, { useState } from 'react'
function InputForm() {
    const [firstName,setFirstName]=useState(null)
    const [secondName,setSecondName]=useState(null)
    const [tnc,setTnc]=useState(null)
    const [intrested,setIntrested]=useState(null)
    function getFormData(e)
    {
         console.log(firstName,secondName,tnc,intrested)
        e.preventDefault()
    }
    function clearAllTheField()
    {
        setFirstName("")
        setSecondName("")
        setIntrested("Unchecked")
        setTnc(null)

    }
    return (
        <div style={{ paddingTop: 100 }}>
            <form onSubmit={getFormData} >
                <label>First Name</label><br /><br />
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/> <br /><br />
                <label>Last Name</label><br /><br />
                <input type="text" onChange={(e)=>setSecondName(e.target.value)}/><br /><br />
                <select onChange={(e)=>setTnc(e.target.value)}>
                    <option>Select the option</option>
                    <option>Owner</option>
                    <option>Employee</option>
                    <option>Others</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e)=>setIntrested("checked")}/>Term and Conditions<br /><br />
                <input type="submit" value="Submit" />
                <button onClick={()=>clearAllTheField}>Clear</button>
            </form>
        </div>
    );
}

export default InputForm