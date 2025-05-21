import React from 'react'
import EventCard from './EventCard'

const EventList = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 md:px-[48px]  gap-12 mb-20'>
      <EventCard id={1} />
      <EventCard id={2} />
      <EventCard id={3} />
      <EventCard id={4} />
    </div>
  )
}

export default EventList