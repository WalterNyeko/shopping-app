import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_DEPARTMENT, 
    FETCH_PRODUCTS_BY_CATEGORY } from '../types';
    import { fetchData } from '../config';
    
    export const getProducts = () => {
      return fetchData("/products", FETCH_PRODUCTS);
    };
    
    export const getProductsPerDepartment = (departmentId) => {
      return fetchData(`/products/inDepartment/${departmentId}`, FETCH_PRODUCTS_BY_DEPARTMENT);
    };
    
    export const getProductsPerCategory = (categoryId) => {
      return fetchData(`/products/inCategory/${categoryId}`, FETCH_PRODUCTS_BY_CATEGORY);
    };