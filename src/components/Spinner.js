import React from 'react';
import { RingLoader } from 'react-spinners';

const Spinner = (spinnerState) => {
      if(spinnerState.spinnerState){
        return <RingLoader />
      }
}

export default Spinner;