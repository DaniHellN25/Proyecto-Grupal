import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getAllPsychologist } from '../../redux/actions';
import NavbarHome from '../NavbarHome/NavbarHome';
import CardPsychologist from '../CardPsychologist/CardPsychologist';


export default function Home() {

  const AllPsychologist = useSelector(state => state.allUsersPsichologists);
  const dispatch = useDispatch();

  useEffect(() =>{dispatch(getAllPsychologist());}, [dispatch]);


  return (
   <div>
    <NavbarHome />
    <div>
      {AllPsychologist.map(el => {
        return(
          console.log(el.about)
        )
      })}
    </div>
    <div>
      {AllPsychologist.length !== 0 ?
      AllPsychologist.map(el =>{
        console.log(el.about.slice(0,100))
        return(
          <CardPsychologist
          firstName={el.firstName}
          lastName={el.lastName}
          profileImage={el.profileImage} 
          rating={el.rating}
          education={el.education}
          about={el.about.slice(0,300)}
          />
        )
      }): <div>Cargando...</div>}
    </div>
    </div>
  )
}

