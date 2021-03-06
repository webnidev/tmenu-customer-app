import React from 'react';
import BannerHeader from '../Tmenu_Header_App.png';
import Logo from '../logo-tmenu-white-top.png';
import { Button, Typography, Icon, SimpleDialog, TextField } from 'rmwc';

function Header() {
  const [open, setOpen] = React.useState(false);
  // const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
    <header className="TmenuHeader">
    <div className={"BarBottomHeader"}>        
        <Typography use="body2"><img src={Logo} alt="Logo Tmenu"/></Typography>
          <SimpleDialog className={"ModalBuscaHeader"}
          title="Buscar item"
          open={open}
          onClose={evt => {            
            setOpen(false);          
          }}>
            <TextField fullwidth placeholder="Ex: Pizza, Hambúrguer, Heineken..." />            
            <Button label="Buscar" unelevated />
          </SimpleDialog>
          <Icon icon="search" onClick={() => setOpen(true)} /> 
      </div>
      <img src={BannerHeader} alt="Banner do Cabeçalho"/>
      <div className={"BarBottomHeader"} style={{padding: "1% 8%", justifyContent: "center", background: "#202221"}}>      
      <Typography use="body2">Você está na mesa: <span><strong>10</strong></span></Typography> 
      </div>
      
    </header>
    {/* <TabBar className={"TabCats"} activeTabIndex={activeTab}
      onActivate={evt => setActiveTab(evt.detail.index)}>
      <Tab>Hambúrguers</Tab>
      <Tab>Refrigerantes</Tab>
      <Tab>Cervejas</Tab>
    </TabBar> */}  
    </>
  );
}

export default Header;
