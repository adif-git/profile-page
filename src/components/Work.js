import React from 'react'
import WorkContent from './WorkContent'
import './Work.css'

class Work extends React.Component{
  render(){
    //OBJECTS FOR WORK EXPERIENCES LIST
    const workList = [
      {
        id: '1',
        name: 'IT Support',
        type: 'Internship',
        place: 'PT. Schlumberger',
        date: '10/2019 - 01/2020',
        description: "Working as IT onsite for 3 months. My job is to assure that all systems working properly for Schlumberger's Managers, Employees, and Contractors in terms of software to hardware. Accomplished to increase number of tickets solved and fulfilled team project.",
      },
      {
        id: '2',
        name: 'Assistant Trainer (IoT)',
        type: 'Part Time',
        place: 'Ministry of Communication and Information Technology',
        date: '08/2019',
        description: "Give assistance to build and troubleshooting with microcontroller (ESP32) and sensors for all participants at Fresh Graduate Academy in IoT subject.",
      },
      {
        id: '3',
        name: 'Microcontroller & Embedded Systems Lab Assistant',
        type: 'Part Time',
        place: 'Institut Teknologi Sepuluh Nopember',
        date: '08/2017 - 09/2019',
        description: "Perform safety assurance and mentoring during lab experiments. Participated in other multiple events as lab assistant. Besides that, I was entrusted as coordinator to prepare any lab visitation that will be held.",
      },
      {
        id: '4',
        name: 'Instrumentation Engineer',
        type: 'Practical Work',
        place: 'PT. Cemindo Gemilang',
        date: '07/2018 - 08/2018',
        description: "Pratical work as Instrumentation Engineer at Bayah site, Banten. Study about DCS, PLC, sensors, and perform maintenances for all electrical instrumentations at site.",
      },
    ];

    return(
      <div className="work-section container-fluid">
        <h1 className="title"><span className="sign">&#187;</span>WORK EXPERIENCES<span className="sign">&#171;</span></h1>
        <div className="timeline">
          {workList.map((workItem)=>{
              return(
                <WorkContent
                  key={workItem.id}
                  id = {workItem.id}
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
