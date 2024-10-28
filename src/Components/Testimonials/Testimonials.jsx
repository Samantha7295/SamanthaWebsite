import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import food_1 from '../../assets/food.png'
import lake_2 from '../../assets/lake.png'
import picnic_2 from '../../assets/picnic.png'
import chargingbull_3 from '../../assets/chargingbull.png'
import airplane_3 from '../../assets/airplane.png'
import van_4 from '../../assets/van gogh.png'

const Testimonials = () => {

  //   const slider = useRef();
  //   let tx = 0; /*translate X*/

  // const slideForward = () => {
  //   if(tx > -50){
  //     tx -= 25;
  //   }

  //   slider.current.style.transform = `translateX(${tx}%)`
  // }
  // const slideBackward = () => {
  //   if(tx < 0){
  //     tx += 25;
  //   }

  //   slider.current.style.transform = `translateX(${tx}%)`
  // }
  const slider = useRef();
  let tx = 0;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideForward = () => {
    if (isMobile) {
        if (tx > -75) { // 4 slides, so 100% / 4 = 25% for each slide
            tx -= 25;
        }
    } else {
        if (tx > -50) {
            tx -= 25;
        }
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
      if (isMobile) {
          if (tx < 0) {
              tx += 25;
          }
      } else {
          if (tx < 0) {
              tx += 25;
          }
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  };

  
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider"> 
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={food_1} alt="" />
                <div>
                  <h3>Food🍰</h3>
                  <span>Glass Kitchen, Modern Asian-fusion</span>
                  <p>One of my favorite pastimes is exploring new foods!✨ I love checking out different restaurants and trying something unique. Whether I'm with my friends, family, or by myself, I always look forward to a good meal. Some of my top favorites are ramen, oysters, and pasta—there’s nothing like discovering new flavors! If you ever have any food reccommendations, send them my way!</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={lake_2} alt="" />
                <div>
                  <h3>Outdoors🌱</h3>
                  <span>Bond Lake, Perfect Lake Run</span>
                  <p>I’ve always loved spending time outside, most likely from my numerous childhood camping trips. So now, it’s inevitably one of my favorite ways to unwind. Whether it’s a game of frisbee, a scenic hike, freeing run, or a relaxed picnic, being outdoors from spring to fall is where I’m happiest!</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={chargingbull_3} alt="" />
                <div>
                  <h3>Travelling✈️</h3>
                  <span>Charging Bull, New York</span>
                  <p>Traveling is one of my favorite ways to dive into new adventures and explore new cultures! My latest trip took me to New York, where I checked out Times Square, the Edge, Wall Street, and Central Park. There’s always something exciting about discovering a new city, and Asia is high on my list for the next big trip. If you have any favorite spots, I’d love to hear them!</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={van_4} alt="" />
                <div>
                  <h3>Art🎨</h3>
                  <span>Van Gogh Exhibition,</span>
                  <span>The Immersive Experience</span>
                  <p>I’ve always loved drawing, painting, and crafting, so spending time around art just feels inspiring. Museums and galleries are a huge interest for me because each piece has its own story to tell. So far, I’ve been to the Art Gallery of Ontario, the Royal Ontario Museum, the Met, and even the Van Gogh Exhibition. One day, I’d love to explore more artwork across the world!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
