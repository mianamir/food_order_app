/**
 * 
 * Commons functions 
 */

export const formatAmount = amount => {

    /** 
     * Format the amount
     */

    try {
        return `$${amount.toFixed(2)}`;
      }
      catch(err) {
    
        console.log('Error from formatAmount function. details: ', err);
        return 0;
      }

};

