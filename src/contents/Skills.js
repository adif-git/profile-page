import chip from '../resources/icons/chip.png'
import console from '../resources/icons/console.png'
import web from '../resources/icons/web.png'
import other from '../resources/icons/other.png'

const skillsList = [
    {
      id: '1',
      name: 'Programming',
      image: console,
      items: ['Python', 'C', 'JavaScript', 'C++']
    },
    {
      id: '2',
      name: 'Embedded System',
      image: chip,
      items: ['Arduino', 'Eagle' ,'ESP' ,'Computer Vision (OpenCV)', 'Raspberry Pi']
    },
    {
      id: '3',
      name: 'Web Development',
      image: web,
      items: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'React.js', 'MySQL', 'MongoDB', "Docker"]
    },
    {
      id: '4',
      name: 'Other',
      image: other,
      items: ['Adobe Photoshop', 'Linux', 'Git']
    },
  ];

export default skillsList