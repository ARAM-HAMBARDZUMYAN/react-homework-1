import React from "react";
import './style.scss'
import XBox from "../xbox";
class Section4 extends React.Component {
  state = {
    reasonsLists: [
      {
        title: 'Which code editor would you recommend?',
        description: "I'd highly recommend you SublimeText.com - a free to try text editor which I'm using daily. Awesome tool!",
       
      },
      {
        title: 'Nice header. Where do I find more images like that one?',
        description: 'Well, there are thousands of stock art galleries, but personally, I prefer to use photos from these sites: Unsplash.com and Flickr - Creative Commons',
       
      },
      //{
        //title: 'Can I use it to build a site for my client?',
        //description: "Yes, you can. You may use this template for any purpose, just don't forget about the license, which says:"'You must give appropriate credit'", i.e. you must provide the name of the creator and a link to the original template in your work."',
        //
     // },
      {
        title: "Can you customize this template for me?",
        description: "Yes, I can. Please drop me a line from my website and describe your needs in details. Please note, my services are not cheap.",
       
      }
    ]
  }
    render() {
      return <section className='P-section-xbox'>
      <div className='G-container'>
        <div className='P-section-title'>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className='P-section-list'>
          
          {this.state.reasonsLists.map((item, index) => {
            return <XBox 
                        title={item.title}
                        description={item.description}/>
          })}

        
</div>
<div className="section4_buttondiv">
  <h4>Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem doloribus recusandae facere magni ullam suscipit sunt atque rerum eaque iusto facilis esse nam veniam incidunt officia perspiciatis at voluptatibus. Libero, aliquid illum possimus numquam fuga.</h4>
<button>Learn more »</button>
</div>
        </div>
      </section>
    }
  }
  
  export default Section4