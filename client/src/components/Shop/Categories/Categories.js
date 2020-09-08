import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import './Categories.css'

export default function Categories({ handleCategoryClick, selectedCategory, label, list }) {

    const history = useHistory();
    let idName = label.toLowerCase() + '-list';


    const handleInformationClick = (item) => {
        const url = item.toLowerCase().split(' ').join('_');
        history.push(`/${url}`);
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    return (
        <div className='categories-container'>
            <div className='categories-label'>{label}</div>
            <div className='category-list'>

                <ul id={idName} >
                    {
                        list.map((item, key) => {
                            if (item === selectedCategory) {
                                return <li onClick={(e) => { return label === 'CATEGORII' ? handleCategoryClick(e) : handleInformationClick(item) }} key={key} style={{ 'color': '#1e88e5', 'background-color': '#e9e9e9' }}>{item}</li>
                            } else {
                                return <li onClick={(e) => { return label === 'CATEGORII' ? handleCategoryClick(e) : handleInformationClick(item) }} key={key}>{item}</li>
                            }
                        })
                    }
                </ul>
            </div >
        </div >
    )
}
