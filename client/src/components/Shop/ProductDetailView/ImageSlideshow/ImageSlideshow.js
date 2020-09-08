import React, { Component } from 'react'
import './ImageSlideshow.css'

import ImageGallery from 'react-image-gallery';

// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },

// ];



export default class ImageSlideshow extends Component {
    render() {

        const images = require.context('../../../../images', true);
        let img = [];
        this.props.images.map((item) => img.push(images('.' + item.substr(1))))

        let imgs = [];
        img.map((item) => { imgs.push({ original: item, thumbnail: item }) });


        return (
            <div id='img-s' style={{ 'width': '30vw' }}>
                <ImageGallery items={imgs} />
            </div>
        )
    }
}
