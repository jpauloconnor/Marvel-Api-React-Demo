import React from 'react';
import { RingLoader } from 'react-spinners';
//TODO: Add spinner during search.

const Spinner = (spinnerState) => {
      if(spinnerState.spinnerState){
        return <RingLoader />
      }
}

export default Spinner;
