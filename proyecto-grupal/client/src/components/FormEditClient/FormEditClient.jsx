import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   HStack,
   InputRightElement,
   Stack,
   Button,
   Heading,
   Text,
   useColorModeValue,
 } from '@chakra-ui/react';
 import { useState } from 'react';
 import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
 
 export default function SignupCard() {
   const [showPassword, setShowPassword] = useState(false);
 
   return (
     <Flex
       minH={'100vh'}
       align={'center'}
       justify={'center'}
       bg={useColorModeValue('gray.50', 'gray.800')}>
       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
         <Stack align={'center'}>
           <Heading fontSize={'4xl'} textAlign={'center'}>
             Edita tu Información Personal
           </Heading>
           <Text fontSize={'lg'} color={'gray.600'}>
             Mantene tus datos actualizados 
           </Text>
         </Stack>
         <Box
           rounded={'lg'}
           bg={useColorModeValue('white', 'gray.700')}
           boxShadow={'lg'}
           p={8}>
           <Stack spacing={4}>
             <HStack>
               <Box>
                 <FormControl id="firstName">
                   <FormLabel>First Name</FormLabel>
                   <Input type="text" />
                 </FormControl>
               </Box>
               <Box>
                 <FormControl id="lastName">
                   <FormLabel>Last Name</FormLabel>
                   <Input type="text" />
                 </FormControl>
               </Box>
             </HStack>
             <FormControl id="email">
               <FormLabel>Email address</FormLabel>
               <Input type="email" />
             </FormControl>
             <FormControl id="country">
               <FormLabel>Country</FormLabel>
               <Input type="country" />
             </FormControl>
             <FormControl id="password">
               <FormLabel>Password</FormLabel>
               <InputGroup>
                 <Input type={showPassword ? 'text' : 'password'} />
                 <InputRightElement h={'full'}>
                   <Button
                     variant={'ghost'}
                     onClick={() =>
                       setShowPassword((showPassword) => !showPassword)
                     }>
                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                   </Button>
                 </InputRightElement>
               </InputGroup>
             </FormControl>
             <Stack spacing={10} pt={2}>
               <Button
                 loadingText="Submitting"
                 size="lg"
                 bg={'green.100'}
                 color='teal.500'
                 _hover={{
                   bg: 'green.500',
                   color:'white'
                 }}>
                 Actualizar
               </Button>
             </Stack>
           </Stack>
         </Box>
       </Stack>
     </Flex>
   );
 }