export const initialState = {
    // basket: [],
    open: false,
    user: null,
    // deliveryAddress: ''
}

// export const getBasketTotal = (basket) => {
//     basket?.reduce((amount, item) => item.price+amount, 0 )
// }

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'OPENLOGINDIALOG':
            return {
                ...state,
                open: true
            };
        case 'CLOSELOGINDIALOG':
            return {
                ...state,
                open: false
            } ; 
        case 'SETUSER':
            return {
                ...state,
                user: action.user
            }  
        default:
            return state;

    }
}

export default reducer


// const [, dispatch] = useStateValue();
// const [{basket, user}, dispatch ] = useStateValue();