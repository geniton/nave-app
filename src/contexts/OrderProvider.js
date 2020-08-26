import React, { createContext, useState } from 'react'
import Api from 'services/Api'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  async function createNaver(args) {
    const {
      name,          
      job_role,      
      birthdate,     
      admission_date,
      project,       
      url
    } = args

    const payload = {
      name,          
      job_role,      
      birthdate,     
      admission_date,
      project,       
      url
    }

    const { data } = await Api.post('/navers',payload)

    return data
  }
  
  return (
    <OrderContext.Provider value={{createNaver}}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }