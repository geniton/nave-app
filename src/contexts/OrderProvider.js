import React, { createContext, useState, useCallback } from 'react'
import Api from 'services/Api'
import t from 'prop-types'

const OrderContext = createContext()

const DELETE = 'Delete'
const USER = 'User'
const FEEDBACK_DELETE = 'FeedbackDelete'
const FEEDBACK_CREATE = 'FeedbackCreate'
const FEEDBACK_UPDATE = 'FeedbackUpdate'

function OrderProvider ({ children }) {
  const [showModalDelete, setModalDelete] = useState(false)
  const [showModalFeedbackDelete, setModalFeedbackDelete] = useState(false)
  const [showModalUser, setModalUser] = useState(false)
  const [showModalFeedbackCreate,setModalFeedbackCreate] = useState(false)
  const [showModalFeedbackUpdate,setModalFeedbackUpdate] = useState(false)
  const [currentUser,setCurrentUser] = useState({
    name : '',          
    job_role : '',      
    birthdate : '',     
    admission_date : '',
    project : '',       
    url : '',
    user_id: ''
  })

  const createNaver = useCallback(async (args) => {
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
  },[])

  const deleteNaver = useCallback(async (id) => {   
    const data = await Api.delete(`/navers/${id}`,currentUser)

    return data
  },[])

  const updateNaver = useCallback(async (args) => {  
    const {
      name,          
      job_role,      
      birthdate,     
      admission_date,
      project,       
      url,
      user_id
    } = args

    const payload = {
      name,          
      job_role,      
      birthdate,     
      admission_date,
      project,       
      url
    } 

    const data = await Api.put(`/navers/${user_id}`,payload)
    return data
  },[])

  const handleModal = useCallback((modal) => {
    const modals = {
      [DELETE]         : () => setModalDelete(m => !m),
      [USER]           : () => setModalUser(m => !m),
      [FEEDBACK_DELETE]: () => setModalFeedbackDelete(m => !m),
      [FEEDBACK_CREATE]: () => setModalFeedbackCreate(m => !m),
      [FEEDBACK_UPDATE]: () => setModalFeedbackUpdate(m => !m)
    }
    return modals[modal]()
  },[])

  const showNaver = useCallback(async (id) => {
    const { data } = await Api.get(`/navers/${id}`)
    return data
  },[])
  
  return (
    <OrderContext.Provider value={{
      createNaver,
      deleteNaver,
      handleModal,
      setCurrentUser,
      updateNaver,
      showNaver,
      showModalUser,
      showModalDelete,
      showModalFeedbackDelete,
      showModalFeedbackCreate,
      showModalFeedbackUpdate,
      currentUser
    }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }