import React from 'react'
import './style.css'
import Button from '../MenuButon/Button'

function Menu({ MenuList, SetCategory }) {

    return (
        <div className="buton-list">
            {
                MenuList.map((menu, i) => <Button key={i} SetCategory={SetCategory} menu={menu} />)
            }
        </div>
    )
}

export default Menu
