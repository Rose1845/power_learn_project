import React, { Fragment, useState } from 'react'
import { faqs } from '../faqs'
import Accordion from './Accordion'
const Faqs = () => {


  return (
    <div  className='d-flex flex-column justify-content-center align-items-center mb-4'>
      <h2 className='text-center'>Frequently Asked Questions</h2>
      {faqs.map(({ question, answer }, tem) => (
        <Accordion key={tem} question={question} answer={answer} />
      ))}
     
    </div>
  )
}

export default Faqs