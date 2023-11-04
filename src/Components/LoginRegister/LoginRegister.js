import { useEffect, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LaginRegister.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let userIsLoggedIn = false;

    useEffect(() => {
        if (!!Cookies.get('auth')) {
            navigate('/')
        }
    }, [userIsLoggedIn]);
    
    const getUser = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                const expirationTime = new Date(new Date().getTime() + 60000);
                Cookies.set('auth', JSON.stringify(user), { expires: expirationTime });
                userIsLoggedIn = true
            }
        });
    }

    const onSubmitButton = async () => {
        if (!(email.includes('@') && email.includes('.com'))) {
            return alert('Not a valid email');
        }
        await getUser();

        // if (!!Cookies.get('auth')) {
        //     console.log('has auth')
        //     navigate('/');
        // } else {
        //     console.log('no auth')
        // }  
    }    
    return (
        <>
        <Form>
            <FloatingLabel
                id="emailLabel"
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >                
                <Form.Control onChange={(e) => setEmail(e.target.value)}type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </FloatingLabel>
            <Button  onClick={onSubmitButton} className="ma2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
    
}

export default LoginRegister;