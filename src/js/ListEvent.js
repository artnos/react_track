import React from 'react';
import _ from "lodash";

function ListEvent({data}){

    let timeArray;
    /*{event.day}*/

    return <ul className={`event`}>{

                _.map(data,function (event, eventID) {


                    timeArray = event.timeformatted.split(" ");
                    //add span //11:00 am - 1:00 pm
                    /*
                      11:00
                      am
                      -
                      1:00
                      pm
                    */

                    return <li key={`id${eventID}`}>
                            {event.name}<br/>
                        {timeArray[0]} <small className={`small-caps`}>{timeArray[1]}</small>
                        {timeArray[2]} {timeArray[3]} <small className={`small-caps`}>{timeArray[4]}</small>

                        <br/>

                            </li>})

                }</ul>;
}


export default ListEvent;

