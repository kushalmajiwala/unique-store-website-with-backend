const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            }
        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTERS_VALUES":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company } = state.filters;

            let temp_product_number = false;

            let active_category = "All";

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text);
                });
                if (tempFilterProduct.length === 0) {
                    temp_product_number = true;
                }
            }

            if (category) {
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    if (category === "All") {
                        return currElem.category;
                    }
                    if (category === currElem.category) {
                        active_category = currElem.category
                    }
                    if (category === "All") {
                        active_category = currElem.category
                    }
                    return currElem.category === category;
                });
                if (tempFilterProduct.length === 0) {
                    temp_product_number = true;
                }
            }

            if (company) {
                console.log("This is called");
                tempFilterProduct = tempFilterProduct.filter((currElem) => {
                    if (company === "All") {
                        return currElem.company;
                    }
                    return currElem.company === company;
                });
                if (tempFilterProduct.length === 0) {
                    temp_product_number = true;
                }
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
                no_products: temp_product_number,
                active_category: active_category
            }

        default:
            return state;
    }
}

export default filterReducer;