import React from 'react';

function Tracks({data, activeInput, setActiveInput}){



    //code copied from Dropdown.js
    function handleOnChange(index){
        console.log('function', index);

        const activeInputCopy = [...activeInput];
        if( activeInput.indexOf( data[index]) !== -1){
            let targetIndex = activeInput.indexOf(data[index]);
            //console.log('i am removing at index: ', index, 'value:', data[index]);
            activeInputCopy.splice(targetIndex, 1);
        }else{
            activeInputCopy.push(data[index]);
        }

        setActiveInput(activeInputCopy);

    }
    if(data === null || data instanceof Error ){
        return (<div>Loading...</div>)
    }

    return (
        <div id="Tracks" className="row">

            {
                data.map(function(d, dIndex){
                    let active = '';
                    //console.log('a lenth', activeTracks,activeTracks.length);

                    if( activeInput.length === 0){
                        active = ''
                    } else if( activeInput.indexOf(d) !== -1){
                        active = 'active'
                    }
                    let formatTitle = d.replace("_-_", "\\");
                    formatTitle = formatTitle.replace("_", "");
                    formatTitle = formatTitle.replace("_", "");
                    formatTitle = formatTitle.replace("_", "");
                    //d.replace("_", " ")

                    return (<div key={d} className={`box ${d} ${active}`}>
                        <div onClick={()=> handleOnChange(dIndex)}>

                            <span>
                                <em></em>
                                <span>{formatTitle}</span>
                            </span>
                        </div>
                    </div>)
                })
            }
        </div>
    );
}


export default Tracks;

