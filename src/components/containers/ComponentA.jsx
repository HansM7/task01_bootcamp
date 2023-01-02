import Contact from "../../models/Contact.Class"
import ComponentB from "../pures/ComponentB"

function ComponentA() {

    const ContactDefault = new Contact('Hans','Melchor','melchorhans5@gmai.com',false)


  return (
    <div>
        <ComponentB contact={ContactDefault}></ComponentB>
    </div>
  )
}

export default ComponentA