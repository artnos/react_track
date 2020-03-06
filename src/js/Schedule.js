import React from 'react';
import _ from 'lodash';
import ListDay from "./ListDay";
import ListDayHeader from "./ListDayHeader";

function Schedule({data, activeTag, setActiveTag,DateArray, className}){


    function clickTag(type){
        const activeTagCopy = []; //...activeTag
        if( activeTag.indexOf( type ) !== -1){
            let targetIndex = activeTag.indexOf(type);
            //console.log('i am removing at index: ', index, 'value:', data[index]);
            activeTagCopy.splice(targetIndex, 1);
        }else{
            activeTagCopy.push( type );
        }
        //console.log('Active Type: ' , activeTagCopy, type);
        console.log('Active Tag', activeTagCopy);

        setActiveTag(activeTagCopy);
    }





    //console.log('data in schedule', data);
    let allEmpty = true;

    return (
        <div id={`Schedule`} className={` ${className}`}>

            {/*<div className="debug row">*/}
            {/*    <div>{ activeTracks.map(function(x){return <span key={x}>{x.replace("%20", " ")}</span>}) }</div>*/}
            {/*    <div>{ activeDates.map(function(x){return <span key={`dd${x}`}>{x}</span>}) }</div>*/}
            {/*</div>*/}
            {/*<div><small>Schedule View { className }</small></div>*/}
            <ul className={`tag`}>{
                _.map(data, function(tag,tagKey){
                    //console.log(activeType, tagKey, activeType.indexOf(tagKey) );
                    let tagClass = tagKey.replace(":", "-");
                    //let rand = Math.floor(Math.random() * Math.floor(1000));
                    //console.log(tagKey + rand);

                    if(!_.isEmpty(tag)){
                        allEmpty = false;
                        return <li key={tagKey} className={`row ${tagClass} `}>

                        <ListDayHeader DateArray={DateArray} data={tag} clickTag={clickTag} tagKey={tagKey}/>

                            { (activeTag.indexOf(tagKey) ) >= 0 && <ListDay DateArray={DateArray} data={tag}/>}
                        </li>
                    }

                })


            }
            { allEmpty === true && <div>No Matches found</div> }
            </ul>

        </div>
    );
}


export default Schedule;

