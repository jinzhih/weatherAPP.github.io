import React from 'react';

function Navigation() {
    return (
        <div style={{flex:'1'}} >
         
          <input class="search-input" />
          <button class="search-btn"><i class="fa fa-search"></i></button>

          <button class="temp-switch">
            <i class="fa fa-thermometer-empty"
            aria-hidden="true"
            style={{paddingRight:'5px'}}
            ></i>
            <sup>&deg;</sup>C
          </button>
       
       </div>
       
    );
  }
  
  export default Navigation;