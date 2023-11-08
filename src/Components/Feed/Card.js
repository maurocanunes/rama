import React from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({index, message}) => {
    let fields;
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'UTC',
        };
    let date = new Date(message?.messageSentDate?.seconds * 1000).toLocaleDateString("pt-BR", options)
    fields = <>
            <Container className="mw5">
                <Row>
                    <div className="ba b-dotted br3 shaddow-1 mv2">
                        {message.sentTitle}
                    </div>
                </Row>
                <Row className="ba b-dotted br3 shaddow-1 mv2">
                    <div>
                        {message.sentMessage.substring(0, 50)}...
                    </div>
                </Row>
                <Row>
                    <Col>
                        Sender:
                        <div className="ba b-dotted br3 shaddow-1 mv2 ">
                            {message?.messageSender}
                        </div>
                    </Col>
                    <Col>
                        Sent Date:
                        <div className="ba b-dotted br3 shaddow-1 mv2 ">
                            {date}
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
    const navigate = useNavigate();

    const click = () => {
        // setCardId(index);
        navigate(`/message/${index}`)
    }
  
    return (
        <div id={index} onClick={click} className=" ba b-black tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer dim">
            <div>
                {fields}
            </div>
        </div>
    );
}

export default Card;