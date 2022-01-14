import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactProvider';

const AddContact = ({showContact, handleCloseContact }) => {
    const [name, setName] = useState('')    
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState('')
    const {addContact} = useContext(ContactContext)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        if(!name.trim() || !phone.trim() || !email.trim() || !img.trim()){
            alert('Fill all fields')
            return
        }
        let newContact ={
            name,
            phone,
            email,
            img
        }
        addContact(newContact)
        setName('')
        setPhone('')
        setEmail('')
        setImg('')
        handleCloseContact()
    }


    return (
        <>
        <Modal onSubmit={handleSubmit} show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
        <Modal.Title>CREATE CONTACT</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center'>
            <div>
            <input 
            className='m-3'
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Name'
                value={name}
            />
            </div>
            <div>
                <input 
                className='m-3'
                    onChange={(e) => setPhone(e.target.value)}
                    type='number'
                    placeholder='Phone number'
                    value={phone}
                />
            </div>
            <div>
                <input 
                className='m-3'
                    onChange={(e) => setEmail(e.target.value)}  
                    type='email' 
                    placeholder='E-mail'
                    value={email}
                />
            </div>
            <div>
                <input 
                className='m-3'
                    onChange={(e) => setImg(e.target.value)}  
                    type='url' 
                    placeholder='Photo'
                    value={img}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button type='submit' variant="info" onClick={handleSubmit}>
            Add
        </Button>
        </Modal.Footer>
        </Modal>

        </>
    );
};

export default AddContact;