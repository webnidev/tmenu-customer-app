import React from 'react';

import { TabBar, Tab, Badge } from 'rmwc';

function MainMenu() {
    return (
      <>
       <TabBar className={"MainMenu"}>
          <Tab restrictIndicator stacked icon="home" label="Início" />
          <Tab restrictIndicator stacked icon="account_circle" label="Minha Conta" />
          
            <Tab restrictIndicator stacked icon="shopping_cart" label="Carrinho"><Badge align="end" label="0"/></Tab>
            
     
          
        </TabBar>
      </>
    );
  }
  
  export default MainMenu;