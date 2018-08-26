export default function (state = '', action) {
    
    switch (action.type) {
        case 'CONTACT_INPUT':
            state={
                ...state,
                state: action.payload
            };
            break;
        default:
            break;

        
    }
    return state;
}