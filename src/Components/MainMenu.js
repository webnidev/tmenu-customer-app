import React from 'react';

import { TabBar, Tab, Badge, Button, Drawer, DrawerHeader, Icon, DrawerTitle, DrawerContent, List, ListItem} from 'rmwc';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import CartIndex from './Cart/CartIndex';

function MainMenu() {

    const [open, setOpen] = React.useState(false);

    return (
      <>
       <BrowserRouter>
            <TabBar className={"MainMenu"}>
              <Tab tag={Link} to="/" restrictIndicator stacked icon="home" label="Início" />
              <Tab restrictIndicator stacked icon="account_circle" label="Minha Conta" onClick={() => setOpen(!open)}/>          
              <Tab tag={Link} to="/cart" restrictIndicator stacked icon="shopping_cart" label="Carrinho"><Badge align="end" label="0"/></Tab>            
            </TabBar>
            <Drawer modal open={open} onClose={() => setOpen(false)}>
            <DrawerHeader>
              <DrawerTitle>Minha Conta</DrawerTitle>          
            </DrawerHeader>
            <DrawerContent>
              <List>
                <ListItem><Icon icon="list" /> Meus Pedidos</ListItem>
                <ListItem><Icon icon="person" /> Meus Dados</ListItem>
                <ListItem><Icon icon="logout" /> Sair</ListItem>
              </List>              
            </DrawerContent>
              <div className="btnToBottom">
                  <Button className="tmenuGreenBg" label="Pedir conta individual" icon="account_balance_wallet" unelevated/>
                  <Button className="tmenuRedBg" label="Pedir conta da mesa" icon="groups" unelevated/>
              </div>
          </Drawer>
          <Routes>
              <Route path="/" end />
              <Route path="/cart" element={<CartIndex/>} />
          </Routes>

      </BrowserRouter>
      </>
    );
  }
  
  export default MainMenu;