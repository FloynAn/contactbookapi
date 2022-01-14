import React, { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../../Context/ContactProvider';
import AddContact from '../AddContact/AddContact';
import ContactCard from '../ContactCard/ContactCard';
import EditContact from '../EditContact/EditContact';

const MainPage = () => {

    const [storeId, setStoreId] = useState('')
    const [showContact, setShowContact] = useState(false)
    const handleCloseContact = () => setShowContact(false)
    const handleShowContact = () => setShowContact(true)

    

    const {contacts, getContacts} = useContext(ContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    const [showContactToEdit, setShowContactToEdit] = useState(false)
    const handleCloseContactToEdit = () => setShowContactToEdit(false)
    const handleShowContactToEdit = () => setShowContactToEdit(true)

    function getId(idToEdit){
        setStoreId(idToEdit)
    }

    if (!contacts){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div  style={{textAlign:'center'}}>
                <ul className='d-flex flex-wrap justify-content-center'>
                    {contacts.map((item, index) =>(
                        <div key={item.id}>
                        <ContactCard
                        handleShowContactToEdit={handleShowContactToEdit}
                        getId={getId}
                        key={item.id}
                        item={item}
                        />
                        </div>
                    ))} 
                </ul>
        </div>
        <EditContact 
            storeId={storeId} 
            showContactToEdit={showContactToEdit} 
            handleCloseContactToEdit={handleCloseContactToEdit} 
            handleShowContactToEdit={handleShowContactToEdit} 
        />
        <AddContact 
            showContact={showContact} 
            handleCloseContact={handleCloseContact}  
            handleShowContact={handleShowContact}
        />
        </div>
    );
};

export default MainPage;