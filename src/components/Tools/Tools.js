import React from 'react'
import { Link } from 'react-router-dom'
import { ToolsList, ToolItem } from './styles'
import { ReactComponent as DeleteIcon } from 'images/icons/Delete-Icon.svg'
import { ReactComponent as EditIcon } from 'images/icons/Edit-Icon.svg'

function Tools() {
  return (
    <ToolsList>
      <ToolItem>
        <DeleteIcon/>
      </ToolItem>
      <ToolItem>
        <Link to="/perfil">
          <EditIcon/>
        </Link>
      </ToolItem>
    </ToolsList>
  );
}

export default Tools;