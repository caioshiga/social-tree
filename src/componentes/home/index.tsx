import { useState } from 'react'
import './profile.scss'
import './link-buttons.scss'
import './social-button.scss'

import twitch from '../../assets/twitch.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';


export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">

      <body>
        
        {/**PROFILE */}
        <div className="profile">
          <div className="teste">
            <div className="cicle-around-img"></div>
            <img src="https://picsum.photos/200/200" alt="" />     
          </div>
              
          <span className='instagram'>@instagram</span>

        </div>

        {/**LINKS FOR OTHER WEBSITES */}
        <main>

          <a href="https://google.com" target="_blank"><button className='custom-btn btn-1'>  Google </button> </a>
          <a href="https://www.youtube.com" target="_blank"> <button className='custom-btn btn-2'> Youtube </button> </a>
          <a href="https://www.reddit.com" target="_blank"> <button className='custom-btn btn-3'> Reddit </button> </a> 
          <a href="https://pt-br.facebook.com" target="_blank"> <button className='custom-btn btn-4'> Facebook </button> </a> 

        </main>
        
        {/**ALL SOCIAL MEDIA */}
        <footer>

          <button> <a href="https://www.twitch.tv/" target='_blank'> <img src={ twitch } alt="" /> </a> </button>
          <button> <a href="https://twitter.com/" target='_blank'> <img src={ twitter } alt="" /> </a> </button>
          <button> <a href="https://instagram.com" target='_blank'> <img src={ instagram } alt="" /> </a> </button>
          <button> <a href="https://github.com" target='_blank'> <img src={ github } alt="" /> </a> </button>
          <button> <a href="https://linkedin.com" target='_blank'> <img src={ linkedin } alt="" /> </a> </button>

        </footer>

      </body>
      
    </div>
  )
}
