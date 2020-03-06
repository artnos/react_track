import React from 'react';



// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faUtensils } from '@fortawesome/free-solid-svg-icons'
// import {library} from "@fortawesome/fontawesome-svg-core";
//
// library.add(faUtensils);


function ListDayHeader({data, DateArray, clickTag,  tagKey}){
    //TODO: need to fix for all occurence of "_"
    //let formatTagKey = tagKey.replace("_", " ").replace("_", " ");
    //let formatTagKey = tagKey.replace(/_/g, " ")

    let formatTagKey = tagKey;
    formatTagKey = tagKey.replace("_-_", "/");
    formatTagKey = formatTagKey.split('_').join(' ');

    //formatTagKey = formatTagKey.replace("_", " ");


    //formatTagKey = formatTagKey.replace("_", "");
    //'123' +  _.replace(tagKey, '_', ' ');

    //Supports long width header
    let previouxBox = false;

    //detect browser width
    function checkClick(tagKey, box) {
        //detect browser width
        console.log('wi',window.innerWidth); //767
        if(window.innerWidth <= 767){
            clickTag(tagKey)
        } else if(box){
            clickTag(tagKey)
        }

    }


        return <ul className={`dayHeader`} >{

        DateArray.map(function(dayKey, index){
            //console.log(dayKey,data[dayKey]);
            let rand = Math.floor(Math.random() * Math.floor(100000));
            let copy = (!previouxBox) ? formatTagKey  : "";



            if(data[dayKey]=== undefined){
                previouxBox = false;


                return <li key={`${dayKey}${rand}`}
                           className={`empty ${dayKey}`}
                           onClick={()=>checkClick(tagKey, false)} >

                    <span>{copy}</span>
                </li>

            }else {

                //if the next one is undefined
                //add a down arrow
                let arrowClass = '';
                if( data[DateArray[index+1]] === undefined){
                    arrowClass = 'arrow';
                }
                //console.log('downARROW?', dayKey, data[DateArray[index+1]] );


                previouxBox = true;

                let line = '';
                // if(copy.length >= 17 ){
                //     line = 'two-lines';
                // }

                return  <li
                        key={`${dayKey}${rand}  `}
                        className={`${line}`}
                        onClick={()=>checkClick(tagKey, true)}>
                            <span className={`copy`}>{copy}</span>
                            <span className={`${arrowClass}`}></span>
                        </li>


            }

        })

    }</ul>;
}


export default ListDayHeader;

