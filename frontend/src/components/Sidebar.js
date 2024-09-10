import Category from "../filters/Category"

import Rating from "../filters/Rating"
import Price from "../filters/Price"




function Sidebar({applyFilter}) {

    // function handleCategoryFilter(data) {
    //     applyFilter({type: 'category', data});

    //   }
      
    return (
        <>
     
        <Category categoryFilter={applyFilter}/>
       
        
        
        <Price  priceFilter={applyFilter}/>
        <Rating rateFilter={applyFilter}/>
        

        </>
    )
}

export default Sidebar