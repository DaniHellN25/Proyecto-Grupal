import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Text, Stack, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import { FaGoogle } from "react-icons/fa";
import NavBar from '../NavBar/NavBar.jsx';
import NavbarHome from '../NavbarHome/NavbarHome.jsx';
import Footer from '../Footer/Footer.jsx';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
//login/logout con google
import { gapi } from 'gapi-script'
import Login from '../LogGoogle/LogInGoogle';
import axios from 'axios';
import { loginClient } from "../../redux/actions";
import { LOCAL_HOST } from "../../redux/actions/types";
const clientId = '451354418729-kmjdfi10akrfqi9a8ln8ntrieehu21v8.apps.googleusercontent.com';
const baseURL = LOCAL_HOST;



function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //login/logout con google
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        };
        gapi.load('client:auth2', start)
    });
    //var accessToken = gapi.auth.getToken().acces_token;

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [signinForm, setSigninForm] = useState({
        email: "",
        password: ""
    })
    /*------------------validaciones----------------*/
    const validate = (signinForm) => {
        let errors = {};
        if (!signinForm.email) {
            errors.email = 'Inserte su email'
        }
        if (signinForm.email && !(signinForm.email).match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)) {
            errors.email = 'Email inválido'
        }
        if (!signinForm.password) {
            errors.password = 'Inserte su contraseña'
        }
        return errors
    }
    const [formErrors, setFormErrors] = useState({})
    /*------------------fin-validaciones----------------*/

    const handleInputChange = (e) => {
        setSigninForm({
            ...signinForm,
            [e.target.name]: e.target.value
        })
    }

    const [isSubmit, setIsSubmit] = useState(false)

    const handleInputSubmit = async (e) => {
        e.preventDefault()
        setFormErrors(validate(signinForm))
        setIsSubmit(true)
    }

    const afterSubmit = async () => {
        if (Object.keys(formErrors).length === 0) {
            // console.log('signInForm', signinForm)            
            let response;
            try {
                response = await axios.post(`${baseURL}/userclient/client/login`, signinForm)
                const token = response.data.token
                window.localStorage.setItem('tokenClient', token)
                // console.log('Este es el .data del response', response.data)
                // console.log('Este es todo el token', token)
                if (response.status === 200) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Bienvenido',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    navigate('/home')
                }
            } catch (error) {
                setIsSubmit(false);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Datos incorrectos',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        } else {
            setIsSubmit(false);
        }
    }

    if (isSubmit) {
        afterSubmit();
    }

    const tokenClient = window.localStorage.getItem('tokenClient')
    const tokenPsychologist = window.localStorage.getItem('tokenPsychologist')

    return (
        <div className='background'>
            {
                tokenClient || tokenPsychologist ? <NavbarHome /> : <NavBar />
            }
            <Container padding='2em' zIndex='1' pb='10%' centerContent>
                {
                    tokenClient || tokenPsychologist
                        ? (
                            <Box minWidth='container.sm' bg='green.100' color='#262626' borderRadius='1em' paddingTop='2em' paddingBottom='2em' align='center'>
                                <Text fontSize='2xl' color={'#285e61'} marginBottom='1em'>
                                    Ya has iniciado sesión
                                </Text>
                                <Link to='/home'>
                                    <Button type='submit' bg={'#63caa7'} color='white' variant='solid' _hover={[{ color: '#63caa7' }, { bg: 'white' }]}>
                                        Ir al home
                                    </Button>
                                </Link>
                            </Box>
                        ) : (
                            <>
                                <Text fontSize='2xl' color={'#285e61'} marginBottom='1em'>
                                    Inicia sesión
                                </Text>

                                <Box minWidth='container.sm' bg='green.100' color='#262626' borderRadius='1em' paddingTop='0' paddingBottom='2em' align='center'>
                                    <Box direction='column' align='center' width='60%'>
                                        <form onSubmit={handleInputSubmit}>

                                            <Input name='email' variant='flushed' placeholder=' Email' bg='white' marginTop='3em' onChange={handleInputChange} />
                                            {formErrors.email && <Text fontSize='sm' color='teal.500'>{formErrors.email}</Text>}

                                            <InputGroup variant='flushed' size='md' bg='white' marginTop='2em' >
                                                <Input
                                                    name='password'
                                                    pr='4.5rem'
                                                    type={show ? 'text' : 'password'}
                                                    placeholder=' Contraseña'
                                                    onChange={handleInputChange}
                                                />
                                                <InputRightElement width='4.5rem'>
                                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                        {show ? 'Hide' : 'Show'}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            {formErrors.password && <Text fontSize='sm' color='teal.500'>{formErrors.password}</Text>}

                                            <Stack direction='column' align='center'>
                                                <Button type='submit' bg={'#63caa7'} color='white' variant='solid' _hover={[{ color: '#63caa7' }, { bg: 'white' }]} marginTop='3em'>
                                                    Iniciar sesión
                                                </Button>

                                                <Login mt='1em' />
                                                {/* <Button bg='green.100' color={'#63caa7'}> */}
                                                {/* Inicia sesión con &nbsp; <FaGoogle /> */}
                                                {/* </Button> */}

                                                <Button bg='green.100' color={'#285e61'} onClick={() => navigate('/signup')} >
                                                    ¿Aún no tienes una cuenta?
                                                </Button>
                                            </Stack>
                                        </form>

                                    </Box>
                                </Box>
                            </>
                        )
                }
            </Container >

            <Footer />
        </div >
    )
}


export default LoginForm;
