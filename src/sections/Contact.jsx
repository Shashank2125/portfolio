import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/HeroModels/Models/ContactExperience'

const Contact = () => {
  const formRef=useRef(null);
  const [loading,setLoading]=useState(false);
  const [form, setForm]=useState({
    name:"",
    email:"",
    message:"",
  });

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setForm({...form,[name]:value});
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setLoading(true);
  
  try{
    await emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,//contain all the information entered in form
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
  
  setForm({name: '',email: '',message: '' });
  }
  catch(error){
console.log('EMAILJS ERROR,',error)
  }finally{
    setLoading(false)
  }
}
  return (
    <section id="contact" className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader
            title="Get in Touch with Me"
            sub="📡 Contact Information"/>
          <div className='mt-16 grid-12-cols'>
            <div className='xl:col-span-5 '>
              <div className='flex-center card-border rounded-xl p-10'>
                <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
                  <div>
                    <label htmlFor='name'>Name</label>
                    <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your name'
                    value={form.name}
                    onChange={handleChange}
                    required
                    />
                    
                  </div>
                  <div>
                      <label htmlFor="email">Email</label>
                      <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Your email address'
                      value={form.email}
                      onChange={handleChange}
                      required/>

                    </div>
                    <div>
                      <label htmlFor='message'>Message</label>
                      <textarea
                      id='message'
                      name='message'
                      rows="5"
                      placeholder='Your message'
                      value={form.message}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <button type='submit' disabled={loading}>
                      <div className='cta-button group'>
                        <div className='bg-circle'/>
                        <p className='text'>{loading? 'Sending...':'Send Message'}</p>
                        <div className='arrow-wrapper'>
                          <img src='/images/arrow-down.svg' alt="arrow"/>
                        </div>

                      </div>
                    </button>

                </form>
              </div>


            </div>
            <div className='xl:col-span-7 min-h-96'>
              <div className='w-full h-full bg-[#B026FF] hover:cursor-grab rounded-3xl overflow-hidden'>
                <ContactExperience/>
              </div>
            </div>

          </div>
        </div>

    </section>
  )
}

export default Contact