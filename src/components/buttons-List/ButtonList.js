import React from 'react'

function ButtonList({Arr,setindex}) {
    const Compnaies = Arr.map((obj)=>obj.company)

    return (
        <div>
            <div className="btn-group-vertical" style={{marginTop: '300px'}}>
                {
                    Compnaies.map((company,i)=><button key={i} type="button" className="btn btn-outline-danger" onClick={()=>setindex(i)}>{company}</button>)
                }

            </div>
        </div>
    )
}

export default ButtonList
