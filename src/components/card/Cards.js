import React,{useState} from 'react'
import './card.css'
function Cards({tour, remove}) {

    const [readmore, setreadmore] = useState(false)

    return (
        <div className="container">
            <div className="card" style={{width: '620px',margin:'0 auto'}} >
                <img src={tour.image} className="card-img-top" style={{maxHeight:'20rem', objectFit:'cover'}} alt={"..."} />
                <div className="card-body">
                    <h5 className="card-title" style={{marginRight:'150px',display:'inline'}}>{tour.name}</h5> <span className="badge bg-warning" style={{textAlign:'right'}}>{tour.price}</span> 
                    <p className="card-text">{readmore? tour.info:tour.info.substring(0,200)} <span onClick={()=>setreadmore(!readmore)} id="span">{readmore?` Show Less`:`... Readmore`} </span></p>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>remove(tour.id)}>Not Interested</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
