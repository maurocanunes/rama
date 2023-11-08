import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';
import { addDoc } from "firebase/firestore";
import { messagesCollectionRef } from "../../Config/Firebase";
import Navigation from "../Navigation/Navigation";
import { redirect } from "react-router-dom";

const RegisterMessage = () => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [reciever, setReciever] = useState('');
    const [sender, setSender] = useState('');
   
    const record = () => {

    }

    const submitMessage = async (event) => {
        try {
            await addDoc(messagesCollectionRef, {
                sentTitle: title,
                sentMessage: message,
                messageReciever: reciever,
                messageSender: sender,
                messageSentDate: new Date()

            })
            redirect('/')
        } catch(err) {
            console.log(err)
            console.error(err)
        }
    }

    return (
        <>
        <Navigation />
        <Form>
            <Button onClick={record} className="ma2" variant="primary" type="button">
                Rocord Message
            </Button>
            <FloatingLabel id="titleLable" controlId="floatingTitle" label="Title" className="mb-3">                
                <Form.Control onChange={(e) => setTitle(e.target.value)} size="lg" type="text" placeholder="This is a title example" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
                <Form.Control onChange={(e) => setMessage(e.target.value)} as="textarea" rows={3} placeholder="This is a message example" />
            </FloatingLabel>
            <FloatingLabel id="recieverLable" controlId="floatingReciever" label="Reciever" className="mb-3">                
                <Form.Control onChange={(e) => setReciever(e.target.value)} size="sm" type="text" as={InputMask} mask="(99) 9 9999-9999" placeholder="Enter receiver phone number" />
            </FloatingLabel>
            <FloatingLabel id="senderLable" controlId="floatingSender" label="Sender" className="mb-3">                
                <Form.Control onChange={(e) => setSender(e.target.value)} size="sm" type="text" as={InputMask} mask="(99) 9 9999-9999" placeholder="Enter sender phone number" />
            </FloatingLabel>
            <Button  onClick={submitMessage} className="ma2" variant="primary" type="submit">
                Send Message
            </Button>
        </Form>
        </>
    )
}
export default RegisterMessage;