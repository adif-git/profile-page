import React from 'react'
import WorkContent from './WorkContent'

class Work extends React.Component{
  render(){
    //OBJECTS FOR WORK EXPERIENCES LIST
    const workList = [
      {
        id: '1',
        name: 'IT Support',
        type: 'Internship',
        place: 'PT. Schlumberger',
        date: 'October 2019 - January 2020',
        description: "Working as IT onsite for 3 months. My job is to assure that all systems working properly for Schlumberger's Managers, Employees, and Contractors in terms of software to hardware. Accomplished to increase number of tickets solved and fulfilled team project.",
      },
      {
        id: '2',
        name: 'Assitant Trainer (IoT)',
        type: 'Fresh Graduate Academy (FGA) Digital Talent Scholarship',
        place: 'Ministry of Communication and Information Technology',
        date: 'August 2019',
        description: "Give assistance to build and troubleshooting with microcontroller (ESP32) and sensors for all participants at Fresh Graduate Academy in IoT subject.",
      },
      {
        id: '3',
        name: 'Microcontroller & Embedded Systems Lab Assistant',
        type: 'Student',
        place: 'Institut Teknologi Sepuluh Nopember',
        date: 'August 2017 - September 2019',
        description: "Perform safety assurance and mentoring during lab experiments. Participated in other multiple events as lab assistant. Besides that, I was entrusted as coordinator to prepare any lab visitation that will be held.",
      },
      {
        id: '4',
        name: 'Instrumentation Engineer',
        type: 'Practical Work',
        place: 'PT. Cemindo Gemilang',
        date: 'July 2018 - August 2018',
        description: "Pratical work as Instrumentation Engineer at Bayah site, Banten. Study about DCS, PLC, sensors, and perform maintenances for all electrical instrumentations at site.",
      },
    ];

    return(
      <div>
        <h1 className="main-title">WORK EXPERIENCES</h1>
        <div className="one-section">
          {workList.map((workItem)=>{
            return(
              <WorkContent
                key = {workItem.id}
                name = {workItem.name}
                type = {workItem.type}
                place = {workItem.place}
                date = {workItem.date}
                description = {workItem.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;
