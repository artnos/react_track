import React from 'react';

function Dates({data, activeInput, setActiveInput}){
    //const [count, setCount] = useState(0);
    //console.log(data);
    //console.log('active dates', activeDates);

    //code copied from Dropdown.js but add .day
    function handleOnChange(index){

        const activeInputCopy = [...activeInput];
        if( activeInput.indexOf( data[index].day ) !== -1){
            let targetIndex = activeInput.indexOf(data[index].day );
            //console.log('i am removing at index: ', index, 'value:', data[index]);
            activeInputCopy.splice(targetIndex, 1);
        }else{
            activeInputCopy.push(data[index].day );
        }

        setActiveInput(activeInputCopy);
    }


    return (
        <div id="Dates" className="row">
            {
                data.map(function(d, dIndex){
                    let active = '';
                    if( activeInput.length === 0){
                        active = ''
                    } else if( activeInput.indexOf(d.day) !== -1){
                        active = 'active'
                    }
                    //console.log(d.day);

                    return (<div key={d.day} className={`box ${d.day} ${active}`}>
                        <div onClick={()=> handleOnChange(dIndex)}>
                            <h3>{d.day}</h3>
                            <p>{d.formatted}</p>
                        </div>
                    </div>)
                })
            }
        </div>
    );
}


export default Dates;

