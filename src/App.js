import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import ReactTooltip from 'react-tooltip';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './components/PivateRoute'; // clone o route ( rotas privadas )

// componentes visuais
import MenuItem from './components/MenuItem'; // tip-right
import Cart from './components/Cart';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>Tela de Pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela do Perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                
                <Cart/>

                {/* verifica onde tem Tooltips para fazer a exibição */}
                <ReactTooltip id="tip-top" place="top" effect="solid" /> 
                <ReactTooltip id="tip-right" place="right" effect="solid" />

            </Container>     
        </BrowserRouter>
    );
}