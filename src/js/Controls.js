import React from 'react';


//https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

function Controls({children}){
    return (
        <div id="Controls" className="row">
                        {children}
        </div>
    );
}


export default Controls;

