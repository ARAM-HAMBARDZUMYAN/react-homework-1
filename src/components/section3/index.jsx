import React from "react";
import Box from "../box"
import './style.scss'
class Section3 extends React.Component {
    state = {
    reasonsList: [
      {
        title: 'Bootstrap-powered',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit?',
        icon: 'icon-manage-users'
      },
      {
        title: 'Fat-free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit!',
        icon: 'icon-manage-users'
      },
      {
        title: 'Creative Commons',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis?',
        icon: 'icon-manage-users'
      },
      {
        title: "Author's support",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita?',
        icon: 'icon-manage-users'
      }
    ]
  }
    render() {
      return <section className='P-reasons-section'>
      <div className='G-container'>
        <div className='P-reasons-title'>
          <h3>Reasons to use this template</h3>
        </div>
        <div className='P-reasons-list'>
          {this.state.reasonsList.map((item, index) => {
            return <Box icon={item.icon}
                        title={item.title}
                        description={item.description}/>
          })}
        </div>
      </div>
    </section>
    }
  }
  
  export default Section3