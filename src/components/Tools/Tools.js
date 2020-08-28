import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OrderContext } from 'contexts/OrderProvider'

// Styles
import { ToolsList, ToolItem } from './styles'

// Icons
import { ReactComponent as DeleteIcon } from 'images/icons/Delete-Icon.svg'
import { ReactComponent as EditIcon } from 'images/icons/Edit-Icon.svg'

function Tools({ user }) {
  const { handleModal, setCurrentUser } = useContext(OrderContext)

  return (
    <ToolsList>
      <ToolItem onClick={() => {
        handleModal('Delete')
        setCurrentUser({...user})
      }}>
        <DeleteIcon/>
      </ToolItem>
      <ToolItem>
        <Link to="/perfil" onClick={() => setCurrentUser({...user})}>
          <EditIcon/>
        </Link>
      </ToolItem>
    </ToolsList>
  );
}

export default Tools;