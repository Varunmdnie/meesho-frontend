import Category from "../filters/Category"
import Color from "../filters/Color"
import Rating from "../filters/Rating"
import Price from "../filters/Price"

function Sidebar({applyFilter}) {

    // function handleCategoryFilter(data) {
    //     applyFilter({type: 'category', data});

    //   }
      
    return (
        <>
         <Category categoryFilter={applyFilter}/>
        <Color/>
        
        <Price/>
        <Rating/>
        

        </>
    )
}

export default Sidebar