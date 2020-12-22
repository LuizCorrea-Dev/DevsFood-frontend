import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import  { useSelector } from 'react-redux';


// verifica a existência do reducer, se existir executa comando abaixo, se não, será redireciona para tela de login 
// prop simula exatamente a mesma rota, mas agora é privada.
export default ({ children, ...rest }) => { 
    const history = useHistory();
    // state recebe user reducer que estou salvando e o token que é o valor que esta sendo salvo.
    const token = useSelector(state => state.user.token); 

    if(!token || token == '') {// se token estive em branco ou indefinido, estão não está logado
        // se não esta logado deve ser redirecionado par tela de login
        history.push('/login'); // redirecionamento
        return null; // null para ele não ir para a rota
    }

return<Route {...rest}>{children}</Route>; // clone o route 
}