import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProductForm from './EditProductForm';
import BASE_API_URL from '../api/apiConfig'; // Import the base API URL

class ProductControl extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: [],
            selectedProduct: null,
            editProduct: false,
            uploadPhoto: null
        };
    }
    
    componentDidMount(){
        axios.get(BASE_API_URL) // Use the imported API URL
            .then(res => {
                console.log(res);
                this.setState({
                    actualProductList: res.data
                });
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }

    handleEditProductClick = () => {
        console.log('HandleEditClick reached!!');
        console.log(this.state.selectedProduct);
        this.setState({
            editProduct: true
        });
    }

    handleAddButtonClick = (id) => {
        const BuyProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        BuyProduct.quantity = BuyProduct.quantity - 1;
        if (BuyProduct.quantity <= 0) {
            BuyProduct.quantity = "Product is not Available";
        }
        this.setState({
            selectedProduct: BuyProduct
        });
    }

    handleClick = () => {
        if(this.state.editProduct){
            this.setState({
                editProduct: false
            });
        } else if (this.state.selectedProduct != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedProduct: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleAddingNewProduct = (newProduct) => {
        axios.post(BASE_API_URL, newProduct) // Use the imported API URL
            .then(res => console.log(res.data))
            .catch(error => console.error("Error adding new product:", error));

        this.setState({
            formVisibleOnPage: false
        });
    };

    handleDeletingProduct = (id) => {
        axios.delete(`${BASE_API_URL}/${id}`) // Use the imported API URL
            .then(res => console.log(res.data))
            .catch(error => console.log(error));

        this.setState({
            actualProductList: this.state.actualProductList.filter(product => product._id !== id),
            formVisibleOnPage: false,
            selectedProduct: null
        });
    }

    handleChangingSelectedProduct = (id) => {
        const selectedProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        this.setState({ selectedProduct: selectedProduct });
    }

    handleEditingProduct = (editedProduct) => {
        axios.put(`${BASE_API_URL}/${this.state.selectedProduct._id}`, editedProduct) // Use the imported API URL
            .then(res => console.log(res.data))
            .catch(error => console.error("Error editing product:", error));

        this.setState({
            editProduct: false,
            formVisibleOnPage: false
        });
        window.location = '/';
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if(this.state.editProduct){
            currentlyVisibleState = <EditProductForm product={this.state.selectedProduct} onEditProduct={this.handleEditingProduct} />;
            buttonText = "Back to Product Detail ";
        } else if (this.state.selectedProduct != null) {
            currentlyVisibleState = <ProductDetail product={this.state.selectedProduct} onBuyButtonClick={this.handleAddButtonClick} onDeleteProduct={this.handleDeletingProduct} onEditProductClick={this.handleEditProductClick} />;
            buttonText = "Back to product list";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct} onPhotoUpload={this.handlePhotoUpload} />;
            buttonText = "Back to product list";
        } else {
            currentlyVisibleState = <ProductList productList={this.state.actualProductList} onProductSelection={this.handleChangingSelectedProduct} />;
            buttonText = "Add a product";
        }

        return (
            <React.Fragment>
                <AddProduct 
                    buttonText={buttonText}
                    whenButtonClicked={this.handleClick}
                />
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default ProductControl;
