import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../models/Contact.Class'

function ComponentB({contact}) {
  return (
    <div>
        <table>
            <tr>
                <td><strong>Nombres: </strong></td>
                <td>{contact.name}</td>
            </tr>
            <tr>
                <td><strong>A pellidos: </strong></td>
                <td>{contact.lastname}</td>
            </tr>
            <tr>
                <td><strong>Email: </strong></td>
                <td>{contact.email}</td>
            </tr>
            <tr>
                <td><strong>Estado: </strong></td>
                <td>{
                    contact.status?'Contacto En Línea':'Contacto No Disponible'
                    }</td>
            </tr>
        </table>
    </div>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB
