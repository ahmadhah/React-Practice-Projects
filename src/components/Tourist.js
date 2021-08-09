import React from 'react'
import Card from './card/Cards'


function Tourist({data, remove}) {
    
    return (
        <div >
            <h1 style={{margin:'50px'}}>Tourist Places</h1>
            {
                data.map((tour)=><Card key={tour.id} remove={remove} tour={tour}/>)
            }
            
        </div>
    )
}

export default Tourist
