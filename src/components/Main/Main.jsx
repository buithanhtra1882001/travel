import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img1 from '../../Assets/img(1).jpeg'
import img2 from '../../Assets/img(2).jpeg'
import img3 from '../../Assets/img(3).jpeg'
import img4 from '../../Assets/img(4).jpeg'
import img5 from '../../Assets/img(5).jpeg'
import img6 from '../../Assets/img(6).jpeg'
import img7 from '../../Assets/img(7).jpeg'
import img8 from '../../Assets/img(8).jpeg'
import img9 from '../../Assets/img(9).jpeg'
import Aos from 'aos'

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destionations in the World. This place is known for  its luxurious stays and adventurous activities.'
  }, 

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru  around which the Urubamba River bends. It is located in the Cusco Region, Urubamba Province, Machupicchu District. It rises over Machu Picchu, the so-called lost city of the Incas. The Incas built a trail up the side of the Huayna Picchu and built temples and terraces on its top. The peak of Huayna Picchu is 2,693 metres (8,835 ft) above sea level, or about 260 metres (850 ft) higher than Machu Picchu.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches. Because of its natural beauty, the Great Barrier Reef has become one of the worlds most sought after tourist destinations.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Accourding to the World Rourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Capadocia. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Guanajuato is a city and municipal seat of the municipality of Guanajuato in central Mexico and the capital of the state of the same name. It is part of the macroregion of the Bajío. It is in a narrow valley, which makes its streets narrow and winding. Most are alleys that cars cannot pass through, and some are long sets of stairs up the mountainsides. Many of the city’s thoroughfares are partially or fully underground. The historic center has numerous small plazas and colonial-era mansions, churches, and civil constructions built using pink or green sandstone. The city historic center and the adjacent mines were proclaimed a World Heritage Site by UNESCO in 1988.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the house are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choise you are about to get here. Happy exploring great food! '
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immese mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  },
]


const Main = () => {

   // React hook to add a scroll animation 
   useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {/* Map data  */}
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main