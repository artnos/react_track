import React from 'react';
import _ from "lodash";
import ListEvent from "./ListEvent";

function ListType({data}){

    return <ul className={`type`}>{
        _.map(data, function (type, typeKey) {
            return <li key={typeKey}><span>{typeKey.replace("_"," ")}</span><ListEvent data={type}/></li>
        })
    }</ul>;
}


export default ListType;

