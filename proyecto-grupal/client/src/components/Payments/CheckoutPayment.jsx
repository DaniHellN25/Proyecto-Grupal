import React, { useEffect } from 'react'
import {Container, Flex} from '@chakra-ui/react'
import Details from './CheckoutComponent/Details'
import Cart from './CheckoutComponent/Cart'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPsychologistOne } from '../../redux/actions'
import Loader from '../Loader/Loader'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
const PUBLIC_KEY = 'pk_test_51LAZBmE2MhU3DqISTvrxle1ZVuoqettGzA62hfUeXi5ynyuOCAl53bubdmZZZz3LiOBT6pAy2SD1jhBkxhc3gJPk00diKWdMvO'
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function CheckoutPayment() {

   const dispatch = useDispatch();
   const { idPsychologist } = useParams()
   console.log(idPsychologist)

   useEffect(() => {
      dispatch(getUserPsychologistOne(idPsychologist));
    }, [dispatch]);

    const psyDetails = useSelector((state) => state.userPsichologistDetail)

    let arr = Object.values(psyDetails);

  return arr.length <=1 ? (
   <Loader /> 
  ) : (
    <Container maxW={'container.xl'} p={0}>
      <Elements stripe={stripeTestPromise}>
      <Flex  py={20} >
          <Details idPsy={idPsychologist}/>
          <Cart name={psyDetails.firstName} last={psyDetails.lastName}
          pic={psyDetails.profileImage}/>
      </Flex>
      </Elements>
    </Container>
  )
}

export default CheckoutPayment