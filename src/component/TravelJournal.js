import React from 'react'

const TravelJournal = (props) => {
  return (
    <div className='journal-div'>
        <div className='img-div'>
            <img src={props.imageUrl} alt='the place'/>
        </div>

        <div className='desc-div'>
            <div className='location-div'>
                <i class="fa-solid fa-location-dot"></i>
                <p className='idk'> {props.location}</p>
                <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p className='desc-p'>{props.description}</p>
        </div>
    </div>
  )
}

export default TravelJournal