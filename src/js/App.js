import React, {useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import '../scss/app.scss';
import Tracks from "./Tracks";
import Dates from "./Dates";
import Controls from "./Controls";
import DataFile from "./data/Data";
import Schedule from "./Schedule";
import Dropdown from "./Dropdown";


// Hook
//TODO: work on slide open animation
//TODO: animations

function App() {
    /* Controls */
    const [trackDropdown, setTrackDropdown] = useState('')
    const [activeTracks, setActiveTracks] = useState([]);

    const [dateDropdown, setDateDropdown] = useState('')
    const [activeDates, setActiveDates] = useState(['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);

    /* Schedule Dropdown */
    const [activeTag, setActiveTag] = useState([]); //Coronary:%20Core
    const [Data, setData] = useState(DataFile); //track data
    const [filteredEvents, setFilteredEvents] = useState(DataFile.Event);
    const [view, setView] = useState(1);




    const updateFilter = () => {

     if(Data !== null){

            let tempData = [];
            //if active tracks not empty take it all
            if(activeTracks.length === 0 && activeDates.length === 0 ){
                //Give them everything in All View
                tempData = {}; //Data.Event;
                setView(1);
            } else if(activeTracks.length === 0){
                //Give them everything but filter dates
                _.map(Data.Event,function(tag, tagKey){

                        let newTypeObj = {};
                        //lets filter by dates selected
                        if(activeDates.length !== 0){
                            _.map(tag, function(day, dayKey){
                                if( activeDates.indexOf(dayKey) >= 0){
                                    newTypeObj = {...newTypeObj, [dayKey]: day }
                                }
                            })
                            tempData = {...tempData,[tagKey]:newTypeObj } //select a few days and pass tag
                        } else {

                            //if there are no dates selected just give them the entire tag data
                            tempData = {...tempData,[tagKey]:tag}
                        }
                });
                setView(1);


            } else {
                //Use the tracks dataset and maybe filter dates
                //console.log('I am filtering:' , activeTracks, activeDates);
                _.map(Data.EventTrack,function(tag, tagKey){

                    //if a tag matches lets bring some or all in
                    if( activeTracks.indexOf(tagKey) >= 0 || activeTracks.length === 0){                        //match

                        let newTypeObj = {};
                        //lets filter by dates selected
                        if(activeDates.length !== 0){
                            _.map(tag, function(day, dayKey){
                                if( activeDates.indexOf(dayKey) >= 0){
                                    newTypeObj = {...newTypeObj, [dayKey]: day }
                                }
                            })
                            tempData = {...tempData,[tagKey]:newTypeObj } //select a few days and pass tag
                        } else {

                            //if there are no dates selected just give them the entire tag data
                            tempData = {...tempData,[tagKey]:tag}
                        }

                    }
                });
                setView(2);

            }


            setActiveTag(['']);
            setFilteredEvents(tempData);

        }//end of data

    }


    useEffect(updateFilter, [activeTracks,activeDates]);

    useEffect(() => {

            // const fetchData = async (d) => {
            //     console.log('fetch sent');
            //     const settings = {
            //         method: 'GET',
            //         headers: {
            //             Accept: 'application/json',
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(d)
            //     };
            //
            //     var host =  window.location.host;
            //     var meeting = window.meeting;
            //     var requestURL;
            //     if(host.indexOf('localhost') !== -1 || host.indexOf('crf.test') !== -1 ){
            //         requestURL = 'https://crf.test/modules/mod_react_tracks/data.php?meeting=' + meeting;
            //         console.log(requestURL);
            //
            //     }else {
            //         requestURL = '/modules/mod_react_tracks/data.php?meeting=' + meeting;
            //         console.log(requestURL);
            //
            //     }
            //
            //     const data = await fetch(requestURL, settings)
            //     .then(response => response.json())
            //     .then(json => {
            //         console.log('fetch success');
            //         console.log('json' , json);
            //
            //         return json;
            //     })
            //     .catch(e => {
            //         console.log(e);
            //         return e
            //     });
            //
            //     console.log('data',data);
            //     setData(data); //all data
            //     setFilteredEvents(data.Event);
            //     if(window.preselect !== ''){
            //         setActiveTracks([window.preselect]);
            //         setActiveTag([window.preselect])
            //     }
            //
            // }
            //fetchData()


    }, []);
    let dateArray = [];
    if(Data === null || Data instanceof Error ){
        return (<div>Loading...</div>)
    } else {
        //flatten Date Object for dropdown
        dateArray = Data.Date.map(function(d){ return d.day; });
    }


    return (
    <div id="App">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h1>
                      React Tracks
                  </h1>

              </div>
          </div>
          {/*{filteredEvents !== null && _.map(filteredEvents,function(s, sKey){*/}

          {/*    return <div key={sKey}>{sKey}</div>*/}
          {/*})}*/}
        <Controls>
            <Dropdown data={dateArray}
                      dropdown={dateDropdown}
                      setDropdown={setDateDropdown}
                      activeInput={activeDates}
                      setActiveInput={setActiveDates}
                      onMouseLeave={()=>setDateDropdown('')}
            >Select Date</Dropdown>
            {Data.Track.length > 0 &&
                    <Dropdown data={Data.Track}
                              dropdown={trackDropdown}
                              setDropdown={setTrackDropdown}
                              activeInput={activeTracks}
                              setActiveInput={setActiveTracks}
                    >Select Track</Dropdown>
            }



        </Controls>

        <br/>

          {Data.Track.length > 0 &&
                <Tracks data={Data.Track} activeInput={activeTracks} setActiveInput={setActiveTracks}  />
          }

          <Dates data={Data.Date}  setActiveInput={setActiveDates} activeInput={activeDates}/>
          {filteredEvents != null ? <Schedule
              data={filteredEvents}
              activeTracks={activeTracks}
              activeDates={activeDates}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              DateArray={dateArray}
              className={` ${view === 1 ?`All`:`Tracks`} `}

          /> : '<div>Events not found</div>'}

      </div>
    </div>
  );
}

export default App;
