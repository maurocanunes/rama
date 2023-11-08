import { React, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../Config/Firebase";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";

const MessageInfo = () => {

    const {id} = useParams();
    const messageRef = doc(db, 'messages', id);
    const navigate = useNavigate();

    const [message, setMessage] = useState({});

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'UTC',
        };
    useEffect(() => {
        const getMessage = async () => {
          try {
            const message = await getDoc(messageRef)
            if (message.exists()) {
                setMessage(message.data())
            }
          } catch (err) {
            console.error(err);
          }
        }
        getMessage();
    },[])
    let date = new Date(message?.messageSentDate?.seconds * 1000).toLocaleDateString("pt-BR", options)

    const deleteMessage = async () => {
        try {
            await deleteDoc(messageRef)
            navigate('/');
            navigate(0,);
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    Title:
                    <div className="ba b-black br4 ">
                        <h2>{message?.sentTitle}</h2>
                    </div>
                </Row>
                <Row className="mv2">
                    Message:
                    <div className="ba b-dotted br3 shadow-2 pa5 mv2">
                        <p>{message?.sentMessage}</p>
                    </div>
                </Row>
                <Row className="mv2">
                    <Col>
                        Reciever:
                        <div className="ba b-dotted br3 shaddow-1 mv2 ">
                            {message?.messageReciever}
                        </div>
                    </Col>
                    <Col>
                        Sender:
                        <div className="ba b-dotted br3 shaddow-1 mv2 ">
                            {message?.messageSender}
                        </div>
                    </Col>
                </Row>
                <Row>
                    Sent Date:
                    <div className="ba b-dotted br3 shaddow-1 mv2">
                        {date}
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Button variant="warning" >
                            Arquivar
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={() => {
                            deleteMessage();
                        }}> Deletar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MessageInfo;