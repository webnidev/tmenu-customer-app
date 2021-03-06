import React from 'react'
import { Button, IconButton, Dialog } from 'rmwc';


const Cat3 = () => {

    const [open, setOpen] = React.useState(false);

    function handleClick(){
        setOpen(true);
    }

    return (
        <div>
           <div className="containerProductCatList">
                <ul>
                    <li onClick={handleClick}>                                               
                            <div className="productImage">
                                <img src="images/cat3_01.jpeg" alt=""/>
                            </div>
                            <div className="produtctDetails">
                                <h2 className="productTitle">Heineken</h2>
                                <p className="productDescription">Descrição exemplo, descrição exemplo...</p>
                                <p className="productPrice">R$7,00</p>
                                <IconButton icon="search"/>
                            </div>                                              
                    </li>
                    
                    <li onClick={handleClick}>                                               
                            <div className="productImage">
                                <img src="images/cat3_02.jpg" alt=""/>
                            </div>
                            <div className="produtctDetails">
                                <h2 className="productTitle">Corona</h2>
                                <p className="productDescription">Descrição exemplo, descrição exemplo...</p>
                                <p className="productPrice">R$9,00</p>
                                <IconButton icon="search"/>
                            </div>                                              
                    </li>
                </ul>
                <Dialog
                    open={open}
                    onClose={evt => {
                    console.log(evt.detail.action);
                    setOpen(false);
                    }}
                    onClosed={evt => console.log(evt.detail.action)}
                >
                            <div className="productImageModal">
                                <img src="images/cat1_02.jpg" alt=""/>
                            </div>
                            <div className="produtctDetailsModal">
                                <h2 className="productTitle">X-Tudo</h2>
                                <p className="productDescription">Descrição exemplo, descrição exemplo...</p>                                
                                <p className="productPrice">R$30,00</p>
                                {/* <div className="qtyControl">
                                    <IconButton icon="remove" />
                                        <TextField type="number"/>
                                    <IconButton icon="add" />
                                </div> */}
                                <Button className="addProductModal" label="Adicionar" icon="add"/>
                            </div>
                </Dialog>
           </div>
        </div>  

    )
}

export default Cat3
