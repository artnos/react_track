import React from 'react';
import _ from "lodash";
import ListType from "./ListType";

function ListDay({data, DateArray}){
    //const [count, setCount] = useState(0);
    let count = 0;

    return <ul className={`day`} >{

        DateArray.map(function(dayKey, index){
            //console.log(dayKey,data[dayKey]);
            let rand = Math.floor(Math.random() * Math.floor(100000));

            if(data[dayKey]=== undefined){

                //console.log(rand);
                //{dayKey}Empty
                return <li key={`${dayKey}${rand}`} className={`empty ${dayKey}`}>

                </li>
            }else {
                return  <li key={`${dayKey}${rand}`} className={``}>
                    <span>{dayKey }</span>
                    <ListType data={data[dayKey]}/>
                </li>
            }

        })

        }</ul>;
}


export default ListDay;

