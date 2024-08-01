import React from 'react'
import './signUp.css'
import Nav from '../Componants/Nav'

const signUp = () => {
    return (
        <>
            <Nav />
            <div className='signUpContainer'>
                <form className='signUpForm'>
                    <h1>SignUp</h1>
                    <div className='inputStream'>
                        <input type='text' placeholder='First name' required />
                        {/* <input type='text' placeholder='middel name' required /> */}
                        <input type='text' placeholder='Last name' required />
                        <input type='text' placeholder='Email address' required />
                        <input type='password' placeholder='Password' required />
                        <input type='password' placeholder='Confirm password' required />
                        <button type='submit'>SignUp</button>
                    </div>
                    <hr />
                    <h4>Already have an account?</h4>
                </form>
            </div>
        </>
    )
}

export default signUp