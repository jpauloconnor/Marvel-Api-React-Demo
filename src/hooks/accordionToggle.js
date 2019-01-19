import React, { useState } from 'react';

export const useToggleState = () => {

    const [isOpen, toggle] = useState(false);
    
    function toggleAccordion(){
        if(isOpen){
            toggle(false);
        } else {
            toggle(true)
        }
    }
  
    return [isOpen, toggleAccordion]
  }