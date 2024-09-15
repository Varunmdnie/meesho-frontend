
import { useState } from "react";
import Footer from "../components/Footer"

import { toast, ToastContainer } from "react-toastify";
import SellerNavbar from "../components/SellerNavbar";

function SellerAdd() {

    // const [productId, setProductId] = useState(1); // Auto-increment ID
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSubCategory, setProductSubCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage1, setProductImage1] = useState("");
    const [productImage2, setProductImage2] = useState("");
    const [productRating, setProductRating] = useState("");
    const [productCount, setProductCount] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productSizes, setProductSizes] = useState([]);
    const [productColors, setProductColors] = useState([]);

    let handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            // productId,
            title: productTitle,
            category: productCategory,
            subCategory: productSubCategory,
            price: productPrice,
            images: [productImage1, productImage2],
            rating: productRating,
            count: productCount,
            description: productDescription,
            sizes: productSizes,
            colors: productColors,
            loggedInUser: JSON.parse(localStorage.getItem('loggedInUser'))
        };


        try {
            const response = await fetch("http://localhost:4000/api/products/addProduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {

                const data = await response.json();
                console.log("Product added successfully:", data);
                toast.success('product added successfully')

            } else {
                console.error("Failed to add product:", response.statusText);
                toast.error('failed to add the product')
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }



    return (
        <>
            < ToastContainer
                autoClose='2000'
                position="top-right"
            />
            <SellerNavbar />
            <div className="container mt-5">
                <div className="container text-muted border  rounded shadow mb-3">
                    <h2 className="text-center mb-4">Add New Product</h2>
                </div>
                <div className="container border  rounded shadow p-3 mb-3 bg-white p-5">
                    <form onSubmit={handleSubmit}>



                        <div className="mb-3 row">
                            <label for="productTitle" className="col-sm-1 col-form-label"> Title</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" id="productTitle" placeholder="Enter Product Title"
                                    value={productTitle} onChange={(e) => setProductTitle(e.target.value)} />
                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label for="productCategory" className="col-sm-1 col-form-label">Category</label>
                            <div className="col-sm-2">
                            
                                <select id="dropdown" name="dropdown" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                                    <option value="" disabled>Category</option> 
                                    <option value="men">men</option>
                                    <option value="women">women</option>
                                    <option value="kids">kids</option>
                                    <option value="beauty">beauty</option>
                                    <option value="electronics">electronics</option>
                                    <option value="home&kitchen">home&kitchen</option>
                                    <option value="footwear">footwear</option>
                                </select>

                            </div>


                            <label for="productsubCategory" className="col-sm-1 col-form-label">subCategory</label>
                            <div className="col-sm-2">
                            
                                <select id="dropdown" name="dropdown" value={productSubCategory} onChange={(e) => setProductSubCategory(e.target.value)} >
                                    
                                    <option value="" disabled>subCategory</option> 
                                    <option value="saree">saree</option>
                                    <option value="kurtis">kurtis</option>
                                    <option value="top">top</option>
                                    <option value="dresses">dresses</option>
                                    <option value="shirt">shirt</option>
                                    <option value="T-shirt">T-shirt</option>
                                    <option value="frocks">frocks</option>
                                    <option value="toys">toys</option>
                                    <option value="pants">pants</option>
                                    <option value="vests">vests</option>
                                   
                                    <option value="beauty">beauty</option>
                                    <option value="electronics">electronics</option>
                                    <option value="home&kitchen">home&kitchen</option>
                                    <option value="footwear">footwear</option>
                                </select>

                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label for="productPrice" className="col-sm-1 col-form-label">Price</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="productPrice" placeholder="Enter Product Price"
                                    value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            </div>
                        </div>




                        <div className="mb-3 row">
                            <label for="productImage1" className="col-sm-1 col-form-label"> Image 1</label>
                            <div className="col-sm-5">
                                <input type="link" className="form-control" id="productImage1"
                                    value={productImage1} onChange={(e) => setProductImage1(e.target.value)} />
                            </div>

                        </div>

                        <div className="mb-3 row">
                            <label for="productImage2" className="col-sm-1 col-form-label"> Image 2</label>
                            <div className="col-sm-5">
                                <input type="link" className="form-control" id="productImage2"
                                    value={productImage2} onChange={(e) => setProductImage2(e.target.value)} />
                            </div>

                        </div>

                        <div className="mb-3 row">
                            <label for="productRating" className="col-sm-1 col-form-label">Rating</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="productRating" placeholder="Enter Product Rating"
                                    value={productRating} onChange={(e) => setProductRating(e.target.value)} />
                            </div>
                            <div className="col-sm-1">

                            </div>
                            <label for="productCount" className="col-sm-1 col-form-label">Count</label>
                            <div className="col-sm-1">
                                <input type="text" className="form-control" id="productCount" placeholder=" Count"
                                    value={productCount} onChange={(e) => setProductCount(e.target.value)} />
                            </div>
                        </div>



                        <div className="mb-3 row">
                            <label for="productDescription" className="col-sm-1 col-form-label"> Description</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="productDescription" rows="3" placeholder="Enter Product Description"
                                    value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="productSizes" className="col-sm-1 col-form-label">Sizes Available</label>
                            <div className="col-sm-1">
                                <select multiple className="form-select" id="productSizes" value={productSizes} onChange={(e) => setProductSizes([...e.target.selectedOptions].map(option => option.value))}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="free size">free size</option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="productColor" className="col-sm-1 col-form-label">Color Available</label>
                            <div className="col-sm-1">
                                <select multiple className="form-select" id="productColor" value={productColors} onChange={(e) => setProductColors([...e.target.selectedOptions].map(option => option.value))} >
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                </select>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-10 offset-sm-5">
                                <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Add Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellerAdd