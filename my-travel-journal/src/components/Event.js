import React from 'react';

function Event(event) {
const e = event.event;
return (
    <div className="Event">
        <img className="event--image" src={e.imageUrl} alt="Location"/>
        <div className="event--text">
            <div className="event--location">
                <img className="event--locationpin" src={require(`../images/locationpin.png`)} />
                <p className="event--locationname">{e.location.toUpperCase()}</p>
                <a className="event--googleMapsUrl" href={e.googleMapsUrl} target="_blank">Open in Google Maps</a>
            </div>
            <p className="event--title">{e.title}</p>
            <p className="event--dates">{e.startDate} - {e.endDate}</p>
            <p className="event--description">{e.description}</p>
        </div>
    </div>
  );
}

export default Event;