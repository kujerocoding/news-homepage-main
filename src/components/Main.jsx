import React from 'react'

const Main = (props) => {
    
  return (
    <main>
      <div className='main-img'></div>
      <h1>The Bright Future of Web 3.0?</h1>
      <div>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button>Read more</button>
      </div>
      <div className='new-container'>
        <h1>New</h1>
        <div className='new-item-container'>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='new-item-container'>
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className='new-item-container'>
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
        <section className='section-one'>
            <img src="../src/assets/images/image-retro-pcs.jpg" alt="" />
            <div>
                <h2>01</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div> 
        </section>
        <section className='section-two'>
            <img src="../src/assets/images/image-top-laptops.jpg" alt="" />
            <div>
                <h2>02</h2>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </section>
        <section className='section-three'>
            <img src="../src/assets/images/image-gaming-growth.jpg" alt="" />
            <div>
                <h2>03</h2>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </section>
      
        <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor.</a> Coded by kujerocoding
        </div>
    </main> 
  )
}

export default Main
