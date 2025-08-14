import React, { useEffect, useState } from 'react'
import {Button} from "../common/Button"
import { useForm } from 'react-hook-form';
import Footer from '../common/Footer';
import { Contacts } from '../common/Contacts';
export const Contact = () => {

  // const { register, handleSubmit ,
  //   reset,
  //   formState: { errors,isSubmitSuccessful}

  // } = useForm();
  // const createFormdata = async(data) =>{
  //   console.log(data);
  // }

  // useEffect(()=>{
  //   if(isSubmitSuccessful){
  //     reset({
  //       name:"",
  //       email:"",
  //       subject:"",
  //       message:"",

  //     })
  //   }
  // },[reset,isSubmitSuccessful]);

  return (
    <div>
   <Contacts/>
   <Footer/>
  {/* <Footer/> */}
    </div>
  )
}
