import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_DEPARTMENT, 
    FETCH_PRODUCTS_BY_CATEGORY, FETCH_PRODUCT, FETCH_PRODUCT_REVIEWS } from '../types';
    import { fetchData } from '../config';
    
    export const getProducts = () => {
      return fetchData("/products", FETCH_PRODUCTS);
    };
    
    export const getProduct = (productId) => {
      return fetchData(`/products/${productId}`, FETCH_PRODUCT);
    };

    export const getProductReviews = (productId) => {
      return fetchData(`/products/${productId}/reviews`, FETCH_PRODUCT_REVIEWS);
    };
    
    export const getProductsPerDepartment = (departmentId) => {
      return fetchData(`/products/inDepartment/${departmentId}`, FETCH_PRODUCTS_BY_DEPARTMENT);
    };
    
    export const getProductsPerCategory = (categoryId) => {
      return fetchData(`/products/inCategory/${categoryId}`, FETCH_PRODUCTS_BY_CATEGORY);
    };