import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img className='sm:w-[192px] w-[100px] object-contain' src={client.logo} alt='client'/>
          </div>
      
      ))}
      </div>
    </section>
  )
}

export default Clients