import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ContactContext } from '../../Context/ContactProvider';

const ContactCard = (props) => {
    const { deleteContact } = useContext(ContactContext)

    return (
        <div className='m-3'>
            <Card style={{ width: '18rem' }} >
                <Card.Img 
                    variant="top" 
                    src={props.item.img} 
                    alt="Photo" 
                    style={{height: '300px'}}
                />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        <div>
                            {props.item.phone}
                        </div>
                        <div>
                            {props.item.email}
                        </div>
                    </Card.Text>
                    <Button 
                        variant="danger" 
                        onClick={() => deleteContact(props.item.id)}
                    >
                        Delete
                    </Button>
                        <Button 
                            className='action-btn' 
                            variant='info'
                            onClick={() => {
                                props.getId(props.item.id)
                                props.handleShowContactToEdit()}}
                        >
                            Edit
                        </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContactCard;