import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactProvider';

const EditContact = ({ showContactToEdit, handleCloseContactToEdit, storeId}) => {

    const{getContactToEdit, contactToEdit, saveEditedContact} = useContext(ContactContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if(contactToEdit){
            console.log(contactToEdit, 'edit');
            setName(contactToEdit.name)
            setPhone(contactToEdit.phone)
            setEmail(contactToEdit.email)
            setImg(contactToEdit.img)
        }
    }, [contactToEdit])


    useEffect(()=>{
        if(storeId){
            getContactToEdit(storeId)
        }
    },[storeId])


    function handleSubmit(e){
        e.preventDefault()
        if(!name.trim() || !phone.trim() || !email.trim() || !img.trim()){
            alert('Fill all fields')
            return
        }
        let editedContact ={
            ...contactToEdit,
            name: name,
            phone:phone,
            email:email,
            img:img
        }

        saveEditedContact(editedContact)
        handleCloseContactToEdit()
        // navigate('/')
    }

    // if(!contactToEdit){
    //     return <h2>Loading...</h2>
    // }


    return (
        <div>
             <>
        <Modal onSubmit={handleSubmit} show={showContactToEdit} onHide={handleCloseContactToEdit}>
            <Modal.Header closeButton>
                <Modal.Title>EDIT CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center'>
                <div>
                    <label htmlFor='inpCustom'>Name:</label> 
                    <input 
                    className='m-3'
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        value={name}
                        id='inpCustom'
                    />
                </div>
                <div>
                    <label htmlFor='inpCustom'>Phone:</label> 
                    <input 
                    className='m-3'
                        onChange={(e) => setPhone(e.target.value)}
                        type='number'
                        value={phone}
                        id='inpCustom'
                    />
                </div>
                <div>
                    <label htmlFor='inpCustom'>E-mail:</label> 
                    <input 
                    className='m-3'
                        onChange={(e) => setEmail(e.target.value)}  
                        type='email' 
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='inpCustom'>Photo:</label> 
                    <input 
                    className='m-3'
                        onChange={(e) => setImg(e.target.value)}  
                        type='url' 
                        value={img}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    type='submit' 
                    variant="info" 
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
        </>

        </div>
    );
};

export default EditContact;