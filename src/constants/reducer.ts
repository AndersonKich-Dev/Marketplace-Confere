const actionTypes = {
    SELECT_PRODUCT: 'SELECT_PRODUCT',
    ADDING_PRODUCT: 'ADDING_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    LIST_DB_PRODUCTS: 'LIST_DB_PRODUCTS'
}

const allInitialState = {
    INITIAL_CARD_STATE:{
        product:{
            name: "",
            style: "",
            code_color: "",
            color_slug: "",
            color: "",
            on_sale: false,
            regular_price: "",
            actual_price: "",
            discount_percentage: "",
            installments: "",
            image: "",
            sizes: [
              {
                available: false,
                size: "",
                sku: ""
              },
              {
                available: false,
                size: "",
                sku: ""
              }
            ]
        },
        display: 'none'
    }
}

export { actionTypes, allInitialState }