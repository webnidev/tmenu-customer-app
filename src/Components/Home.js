import React from 'react';
import { List, CollapsibleList, SimpleListItem } from 'rmwc';
import "./Home.css";
import Cat1 from './Products/Cat1';
import Cat2 from './Products/Cat2';
import Cat3 from './Products/Cat3';

function Home() {
    return (
      <>
        <List>
            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Hambúrguers"                  
                  metaIcon="chevron_right"
                />
              }
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >
             <Cat1/>
            </CollapsibleList>

            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Refrigerantes"
                  metaIcon="chevron_right"
                />
              }
            >
              <Cat2/>
            </CollapsibleList>

            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Cervejas"
                  metaIcon="chevron_right"
                />
              }
            >
             <Cat3/>            
            </CollapsibleList>          
            
          </List>
      </>
    );
  }
  
  export default Home;