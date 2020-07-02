import React, { Component } from 'react'
import '../../css/Banner.css'
// import { StyleSheet, css } from 'aphrodite'

class BannerComponent extends Component {
    render() {
        return (
            <img 
                id="top-banner" 
                src="https://cdn.lezhin.com/v2/inventory_items/4539708458729472/media/topBanner.webp" 
                alt="top-banner"
            />
        )
    }
}
export default BannerComponent