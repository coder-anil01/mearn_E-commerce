import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaUser, FaLock} from 'react-icons/fa';
import { IoIosMailOpen } from "react-icons/io";
import '../../style/pages/Login.css';
import SpinerLoading from '../../component/SpinerLoading';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';

const Login = () => {

    const [toggelButton, setToggelButton] = useState(1);
    const [otpInput, setOtpInput] = useState(false);
    const [otpInputData, setOtpInputData] = useState(['','','','','','']);
    const [loading, setLoading] =useState(false);
    const [requestLink, setRequestLink] =useState('http://localhost:8080/api/v1/user/verifyOtp');


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();


    function moveToNext(e, inputNo) {
        let value = e.target.value;
        otpInputData.splice(inputNo, 1, value);
        console.log(otpInputData);
        if(value.length === 1){
            document.getElementById(`input${inputNo+1}`).focus();
        }else{
            document.getElementById(`input${inputNo-1}`).focus();
        }
      }

    useEffect(()=>{
        if(toggelButton === 2){
            setRequestLink('http://localhost:8080/api/v1/user/signIn');
        }else{
            setRequestLink('http://localhost:8080/api/v1/user/verifyOtp');
        }
    },[toggelButton])

// **********  GET  OTP  ***********//
    const getOtp = async() => {
        try {
            setLoading(true)
            const {data} = await axios.post('http://localhost:8080/api/v1/user/createUser', {name, email, password});
            if(data.success){
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        
    }
      
// **********    HANDLE  SUBMIT   ***********//
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const {data} = await axios.post(`${requestLink}`, {email, otp: otpInputData.join(''), password});
            if(data.success){
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data);
                setLoading(false)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(auth?.user){
            setName(auth?.user?.name)
            setEmail(auth?.user?.email)
        }
    },[auth])

    
      
  return (
    <>
    <div className="login">
        <div className="login-container">
            <img src="https://res.cloudinary.com/coderanil/image/upload/v1710776441/Login_1_kypfdi.png" alt="" />
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Welcome to <span>Shopu</span> !</h2>
                <div className="login-button-group">
                    <div className={toggelButton === 1? 'avtive-button' : "login-button-group-button"} onClick={()=>setToggelButton(1)}>Login</div>
                    <div className={toggelButton === 2? 'avtive-button' : "login-button-group-button"} onClick={()=>setToggelButton(2)}>Signup</div>
                    <div className={toggelButton === 3? 'avtive-button' : "login-button-group-button"} onClick={()=>setToggelButton(3)}>Forget</div>
                </div>
               {toggelButton ===1 && <div className="login-card">
                    <FaUser className='login-card-icon'/>
                    <input type="text"
                        autoFocus
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='login-card-input'
                        placeholder="Enter Full Name"
                        required/>
                </div>}
                <div className="login-card">
                    <div><IoIosMailOpen className='login-card-icon'/></div>
                    <input type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='login-card-input'
                        placeholder="Enter Your Email"/>
                    
                </div>
                {toggelButton !== 3 && <div className="login-card">
                    <div><FaLock className='login-card-icon'/></div>
                    <input type="text"
                        onChange={(e)=>setPassword(e.target.value)}
                        className='login-card-input'
                        placeholder="Enter New Password"/>
                </div>}
                {toggelButton !== 2 && <div className='get-otp-button' onClick={()=>{setOtpInput(true), getOtp()}}>Get Otp</div>}

                {toggelButton !== 2 && otpInput && <div className='otp-input-card'>
                    {[1,1,1,1,1,1].map((d, index)=>(
                        <input key={index} type="text" maxLength="1" id={`input${index}`} onChange={(e)=>moveToNext(e, index)} />
                    ))}
                </div>}
                <button type='submit' className='login-form-button'>Submit</button>
            </form>
        </div>
    </div>
    {loading && <SpinerLoading/>}
    </>
  )
}

export default Login
