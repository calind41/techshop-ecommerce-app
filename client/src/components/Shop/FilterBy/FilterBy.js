import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './FilterBy.css'
import Checkbox from '@material-ui/core/Checkbox';
import FontAwesome from 'react-fontawesome';

export default function FilterBy({ handleFilterByClick, handleClear, category }) {

    const [brandList, setBrandList] = useState([]);

    let initialValuesCheckedArr = [];
    const [checkedValue, setChecked] = React.useState(initialValuesCheckedArr);


    useEffect(() => {
        const getBrandList = async (category) => {
            let res = await axios.get(`http://localhost:5000/api/v1/products/brandList/${category}`);
            let { data } = res;
            setBrandList(data);

            for (let i = 0; i < data.length; i++)
                initialValuesCheckedArr.push(false);
        }
        getBrandList(category.toLowerCase());

    }, [])





    const showBrands = () => {
        let bl = document.getElementById('brand-list');
        let arrow = document.querySelector('.arrow-down-i');
        let bc = document.querySelector('.brands-container');
        let ic = document.querySelector('.information-container');
        console.log(bl.style.display);
        if (bl.style.display == '' || bl.style.display === 'none') {
            arrow.style.transform = 'rotate(180deg)';
            bl.style.display = 'block';
            bc.style.height = '29.5vh'
            ic.style.bottom = '-3vh';
        } else {
            arrow.style.transform = '';
            bl.style.display = 'none';
            bc.style.height = ''
            ic.style.bottom = '15.4vh';

        }
    }
    const handleApplyBtnClick = (e) => {
        let priceRange = [];
        priceRange[0] = document.getElementById('min-price').value;
        priceRange[1] = document.getElementById('max-price').value;

        let selectedBrands = [];
        document.querySelectorAll('.checkbox-container-brands span input').forEach((item) => {
            if (item.checked === true) {
                let idx = parseInt(item.id);
                selectedBrands.push(brandList[idx]);
            }
        })

        handleFilterByClick(priceRange, selectedBrands);
    }

    const handleClearBtnClick = () => {
        document.getElementById('min-price').value = '';
        document.getElementById('max-price').value = '';

        document.querySelectorAll('.checkbox-container-brands span input').forEach((item) => {
            if (item.checked === true) {
                item.checked = false;
                console.log('cleared');
            }

        })
        setChecked(initialValuesCheckedArr)
        handleClear();

    }

    const toggleCheckbox = (e) => {
        const idx = e.target.id;
        let arr = [...checkedValue];
        arr[idx] = !arr[idx];
        setChecked(arr);
    }



    return (
        <div className='filterby-container'>
            <div className='filterby-label'>
                FILTER BY
            </div>
            <div className='filter-body'>
                <div className='price-container'>
                    <div className='price-label'>Price</div>
                    <div className='range-price'>
                        <input type='number' placeholder='Min' id='min-price' min='0' step='5' />
                        <span>-</span>
                        <input type='number' placeholder='Max' id='max-price' step='5' />
                    </div>
                </div>
                <div className='brands-container'>
                    <div onClick={() => showBrands()} className='brands-label'>Brands</div>
                    <div onClick={() => showBrands()} className='arrow-down-i'><FontAwesome name='fas fa-chevron-down' /></div>
                    <div id='brand-list'>
                        {
                            brandList !== undefined ?
                                brandList.map((item, key) => {
                                    return (
                                        <div key={key} style={{ 'display': 'flex', 'align-items': 'center' }}>
                                            <Checkbox
                                                checked={checkedValue[key] ? checkedValue[key] : false}
                                                id={key}
                                                className='checkbox-container-brands '
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                onChange={toggleCheckbox}
                                            />
                                            <div>{item}</div>
                                        </div>
                                    )
                                }) : null
                        }

                    </div>
                </div>
                <div className='fb-action-btns'>
                    <button onClick={(e) => { handleApplyBtnClick(e) }}>Apply</button>
                    <button id='checkbox-clear-btn' onClick={() => { handleClearBtnClick() }}>Clear</button>
                </div>

            </div>

        </div>
    )
}
