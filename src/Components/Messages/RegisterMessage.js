import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';
import { addDoc } from "firebase/firestore";
import { messagesCollectionRef } from "../../Config/Firebase";
import Navigation from "../Navigation/Navigation";
import { redirect } from "react-router-dom";
import useSpeechToText from 'react-hook-speech-to-text';

const RegisterMessage = () => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [reciever, setReciever] = useState('');
    const [sender, setSender] = useState('');
   
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });
    
      if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

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
            <Button onClick={isRecording ? stopSpeechToText : startSpeechToText} className="ma2" variant="primary" type="button">
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <h1>Recording: {isRecording.toString()}</h1>
            <FloatingLabel id="titleLable" controlId="floatingTitle" label="Title" className="mb-3">                
                <Form.Control onChange={(e) => setTitle(e.target.value)} size="lg" type="text" placeholder="This is a title example" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
            <Form.Control 
                onChange={(e) => setMessage(e.target.value)} 
                as="textarea" 
                rows={3} 
                placeholder="This is a message example" 
                disabled={isRecording} 
                value=
                {
                    results.map((result) => (
                        result.transcript
                    )) 
                }
                />
            </FloatingLabel>
            {/* {interimResult && <li>{interimResult}</li>} */}
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