import React from 'react';
import BannerHeader from '../Tmenu_Header_App.png';
import { Button, Typography, TabBar, Tab } from 'rmwc';

function Header() {
  return (
    <>
    <header className="TmenuHeader">
      <img src={BannerHeader} alt="Banner do Cabeçalho"/>     
      <div className={"BarBottomHeader"}>
              <Button label="Entrar" icon="input" />
              <Button label="Cadastrar-se" icon="person_add" />
          <Typography use="body2">Mesa: <span><strong>10</strong></span></Typography>
      </div>
    </header>
    <TabBar>
      <Tab>Entradas</Tab>
      <Tab>Pizzas</Tab>
      <Tab>Massas</Tab>
      <Tab>Bebidas</Tab>
      <Tab>Sobremesas</Tab>
    </TabBar>  
    </>
  );
}

export default Header;
