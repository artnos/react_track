#  React Agenda Creator

A simple filter selector plus calender overivew.

#### <a href="http://demo.artsir.com/react_track/dist/">Demo</a>
## Installation
1. You will need to have node.js installed and install webpackserver globally
    
       //git clone this repo
       //cd to root directory
       npm install
              

2. Run Development Server
       
       npm start
 
## Deployment

Files will be in ./dist/*
```
 //for production
 npm run prod
```

## 

### Data
Data is located in the data directory but was build to pull from a server

```
Data Structure
{
    Track: [], //list of keyword tags
    EventTrack: {
        <TrackName>: {
            Wednesday: {
                Oral_Abstract_Session: {
                    63062: {
                        name: "Title",
                        timebegin: "2019-09-25T12:30:00",
                        timeend: "2019-09-25T14:30:00",
                        day: "Wednesday",
                        timeformatted: "12:30 pm - 2:30 pm"
                        }}}
                    
    }//object Events Group by Track
    Event: {}//Object Events Group by Location
    Date: {} //List of days
    
}
```
 There is two 
filtering, filtering by tags and filtering by days. So the data had to be duplicated and group this way. This data 
was formatted by the server, it isn't stored this way.


### Deployment

For deployment copy files from dist folder.



### Future

This is done a feature i could add would be to adjust the css to accomodate events that don't have 5 days instead of this was a fun project.