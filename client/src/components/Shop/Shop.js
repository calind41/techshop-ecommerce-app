import React, { useState, useEffect, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import Categories from './Categories/Categories'
import FilterBy from './FilterBy/FilterBy'
import './Shop.css'
import SelectList from './SelectList/SelectList'
import ImageGallery from 'react-image-gallery';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import NavigationHistory from './NavigationHistory/NavigationHistory'
import ProductCategory from '../LandingPage/CategoryList/ProductCategory/ProductCategory'

import Product from '../LandingPage/NewProductsList/Product/Product'


const ENDPOINT = 'http://64.225.109.79:5000/'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Shop({ initalCategory, match }) {
    const classes = useStyles();
    const history = useHistory();



    const category = match.params.category.split('_').join(' ')
    const [categoryName, setCategoryName] = useState(category);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [pageNr, setPageNr] = useState(1);
    const [index, setIndex] = useState(0);


    const categoryList = ['Smartphone', 'Laptop', 'Tableta', 'Smartwatch', 'Televizor', 'Toate'];
    const infoList = ['Despre Noi', 'Servicii Clienti', 'Expediere si Livrare', 'Plata Securizata', 'Contact'];
    const sortByValues = ['Pret: Ascendent', 'Pret: Descendent', 'Nume: A-Z', 'Nume: Z-A'];



    let [prodArr, setProdArr] = useState([]);
    let [originalProdArr, setOriginalProdArr] = useState([]);

    useEffect(() => {
        // get products by category 
        let c;
        const getProducts = async () => {
            c = window.location.pathname.substr(6);
            let lc = c.toLocaleLowerCase();
            let res = await axios.get(`http://localhost:5000/api/v1/products/category/${lc}`);
            let { data } = res;
            setProdArr([...data]);
            setCategoryName(c);
            setOriginalProdArr([...data]);
        }
        getProducts();


    }, [])


    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }

    // nr of products of category x 
    const nrProds = prodArr.length;


    const updateProps = (value) => {
        // console.log(originalProdArr[0].props.children.props.text);

        const sortStringsCmp = (a, b) => {
            if (a.nume < b.nume) {
                return -1;
            }
            if (a.nume > b.nume) {
                return 1;
            }
            return 0;
        }

        // if (prodArr[0] !== null)
        prodArr = [...originalProdArr];
        switch (value) {
            case 'Pret: Ascendent':
                prodArr.sort((item1, item2) => {
                    let price1 = parseFloat(item1.pret.slice(0, -3));
                    let price2 = parseFloat(item2.pret.slice(0, -3));
                    return price1 - price2;

                });
                setProdArr(prodArr);
                setPageNr(1);
                setIndex(0);
                break;
            case 'Pret: Descendent':
                prodArr.sort((item1, item2) => {
                    let price1 = parseFloat(item1.pret.slice(0, -3));
                    let price2 = parseFloat(item2.pret.slice(0, -3));
                    return price2 - price1;

                });
                setProdArr(prodArr);
                setPageNr(1);
                setIndex(0);
                break;
            case 'Nume: A-Z':
                prodArr.sort(sortStringsCmp);
                setProdArr(prodArr);
                setPageNr(1);
                setIndex(0);
                break;
            case 'Nume: Z-A':
                prodArr.sort(sortStringsCmp).reverse();
                setProdArr(prodArr);
                setPageNr(1);
                setIndex(0);
                break;
            default:
                break;
        }

        setSelectedFilter(value);

    }

    const changePage = (page) => {
        setPageNr(page);
        setIndex(page * 9 - 9);
        // display from array of products: prodArr[idx, idx+8]

    }

    const handleCategoryClick = (e) => {
        if (e.target.style.color !== 'rgb(30, 136, 229)') {
            setCategoryName(e.target.textContent)
            console.log('CUM ERA ');
            // set select list to initial value
            setSelectedFilter('');
            setProdArr(originalProdArr);

            // reset the page nr to 1
            setPageNr(1);
            setIndex(0);

            // reset checkbox
            document.querySelector('#checkbox-clear-btn').click();


            let items = document.querySelector('#categorii-list').childNodes
            items.forEach((item) => {
                item.style.color = '#727171';
                item.style.backgroundColor = '#ffffff';
            });

            e.target.style.color = 'rgb(30, 136, 229)';
            e.target.style.backgroundColor = 'rgb(233, 233, 233)';
        }

        const url = e.target.textContent.split(' ').join('_');
        history.push(`/shop/${url}`);

    }
    const handleFilterByClick = (priceRange, selectedBrands) => {

        let prods = originalProdArr.filter((item) => {
            let price;
            if (item.pret)
                price = parseFloat(item.pret.slice(0, -3));
            let brandName = item.numeBrand.toLowerCase();

            let sbNew = selectedBrands.map((item) => item.toLowerCase());


            return (priceRange[0] === '' ? true : (price >= priceRange[0]))
                && (priceRange[1] === '' ? true : price <= priceRange[1])
                && (sbNew.length === 0 ? true : sbNew.includes(brandName));
        });

        if (prods.length === 0) {
            setProdArr([null])
        } else {
            setProdArr(prods);
        }
    }
    const handleClear = () => {
        setProdArr(originalProdArr);
    }

    return (

        <div className='shop-contner'>
            <div>
                <NavigationHistory path={`${categoryName}`} />
            </div>
            <div className='category-name-heading'>{categoryName}</div>
            <div className='shop-wrapper'>
                <div className='aside-container'>
                    <div className='categories-container'>
                        <Categories handleCategoryClick={handleCategoryClick} selectedCategory={categoryName} label='CATEGORII' list={categoryList} />
                    </div>
                    <div className='fltrby-container'>
                        <FilterBy handleFilterByClick={handleFilterByClick} handleClear={handleClear} category={categoryName} />
                    </div>
                    <div className='information-container'>
                        <Categories label='INFORMATII' list={infoList} />
                    </div>
                </div>
                <div className='shop-main-container'>
                    <div className='view-criterias'>
                        <div className='sortby-container'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sortează' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={Math.ceil(nrProds / 9)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                    <div className='shop-prod-container'>
                        {
                            prodArr === [] || prodArr[0] === null ? null : prodArr.map((product, idx) => {
                                return idx >= index && idx <= index + 8 ? (<div className='p-item'>
                                    <Product sku={product._id} src={product.poze} brandName={product.numeBrand} text={product.nume} price={product.pret} listaAtribute={product.lista_atribute} categorie={product.categorie} descriere={product.descriere} />
                                </div>) : null
                            })
                        }
                    </div>
                    <div className='view-criterias-down'>
                        <div className='sortby-container-down'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sortează' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component-down'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={Math.ceil(nrProds / 9)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                </div>
            </div>
            <div id='footer-cpyright-container'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div>
    );
}


const linkStyles = {
    'textDecoration': 'none',
    'color': 'black'
}