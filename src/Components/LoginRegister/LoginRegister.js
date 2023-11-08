import {  useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LaginRegister.css';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from "../../Config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Navigation from "../Navigation/Navigation";

const LoginRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const signIn = async (event) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            afterSignIn()
        } catch (error) {
            console.log('code', error.code);
            console.log('message', error.message);
        }
    }
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            afterSignIn()
        } catch (error) {
            console.log('code', error.code);
            console.log('message', error.message);
        }
    }
    const afterSignIn = () => {
        if (auth.currentUser) {
            navigate('/message');
        } else {
            alert('Try signing in again')
        }
    }
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log('code', error.code);
            console.log('message', error.message);
        }
    }
    return (
        <>
        <Navigation />
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
            <Button  onClick={signIn} className="ma2" variant="primary" type="submit">
                Sign In
            </Button>
            <Button onClick={signInWithGoogle} className="ma2" variant="primary" type="button">
                Sign In With Google
            </Button>
            <Button onClick={logOut} className="ma2" variant="danger" type="button">Log Out</Button>
        </Form>
        </>
    ); 
}
export default LoginRegister;