import React from 'react'
import './style.css'

function Card({length, data,setindex,index}){
    
    function increment (){
        if(index!=length-1){
            setindex(index+1)
        }
        else alert('Last Pic')
    }
    function decrement (){
        if (index!=0){setindex(index -1)}
        else alert('Last Pic')
    }
    function random (){
        const num = Math.floor(Math.random()*length)
        if(num!=index){
            setindex(num)
        }else random()
        
    }
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p id="job">{data.job}</p>
                    <p className="card-text">{data.text}</p>
                    <i onClick = {decrement} className="fas fa-angle-left"></i>
                    <i className="fas fa-angle-right" onClick = {increment}></i>
                    <a href="#" className="btn btn-primary" onClick = {random}>Random</a>
                </div>
            </div>
        </div>
    )
}

export default Card
