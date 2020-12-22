const initialState = {
    // reducer responsável portratardo processo de login
    token: '', // login metodo jwt, armazenado no percist
    name: 'Teste'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token}; // mudar o token
        break;
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
    }

    return state;
}