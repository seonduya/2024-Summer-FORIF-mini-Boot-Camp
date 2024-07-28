import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const [isIdCheck, setIsIdCheck] = useState(false);
    const [isIdAvailable, setIsIdAvailable] = useState(false);

    const navigate = useNavigate();

    const onChangeNameHandler = (e) => {
        setName(e.target.value);
    }

    const onChangeIdHandler = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        setIsIdCheck(false);
        setIsIdAvailable(false);
        idCheckHandler(idValue);
    }
    
    const onChangePasswordHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirm);
        } else if (name === 'confirm') {
            setConfirm(value);
            passwordCheckHandler(password, value);
        }
    }

    const idCheckHandler = (id) => {
        const idRegex = /^[a-z\d]{5,10}$/;
        if (id === '') {
            setIdError('아이디를 입력해주세요.');
            setIsIdAvailable(false);
            return false;
        } else if (!idRegex.test(id)) {
            setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
            setIsIdAvailable(false);
            return false;
        }
        // 여기서 서버로 중복 체크 요청을 보내야 합니다.
        // 지금은 임시로 항상 사용 가능하다고 가정합니다.
        setIdError('사용 가능한 아이디입니다.');
        setIsIdCheck(true);
        setIsIdAvailable(true);
        return true;
    }

    const passwordCheckHandler = (password, confirm) => {
        const passwordRegex = /^[a-z\d!@*&-_]{4,16}$/;
        if (password === '') {
            setPasswordError('비밀번호를 입력해주세요.');
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호는 4~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
            return false;
        } else if (confirm !== password) {
            setPasswordError('');
            setConfirmError('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            setPasswordError('');
            setConfirmError('');
            return true;
        }
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        
        if (!isIdCheck || !isIdAvailable) {
            alert('아이디 중복 검사를 해주세요.');
            return;
        }
    
        const passwordCheckResult = passwordCheckHandler(password, confirm);
        if (!passwordCheckResult) return;
    
        // 여기서 서버로 회원가입 요청을 보내야 합니다.
        // 지금은 임시로 항상 성공한다고 가정합니다.
        localStorage.setItem('loginId', id);
        alert('회원가입이 완료되었습니다.');
        navigate('/'); // 홈 페이지로 이동
    }

    const boxStyle = {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        margin: '0 auto'
    }

    const inputStyle = {
        width: '200px',
        marginBottom: '10px',
        padding: '5px'
    }

    const buttonStyle = {
        ...inputStyle,
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    }

    return (
        <div style={boxStyle}>
            <h2>번거롭게 만드는 회원가입 창</h2>
            <form onSubmit={signupHandler}>
                <input
                    style={inputStyle}
                    placeholder="이름"
                    value={name}
                    onChange={onChangeNameHandler}
                />
                <input
                    style={inputStyle}
                    placeholder="아이디"
                    value={id}
                    onChange={onChangeIdHandler}
                />
                {idError && <p style={{color: 'red'}}>{idError}</p>}
                <input
                    style={inputStyle}
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onChangePasswordHandler}
                />
                {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
                <input
                    style={inputStyle}
                    type="password"
                    name="confirm"
                    placeholder="비밀번호 확인"
                    value={confirm}
                    onChange={onChangePasswordHandler}
                />
                {confirmError && <p style={{color: 'red'}}>{confirmError}</p>}
                <button type="submit" style={buttonStyle}>제출</button>
            </form>
        </div>
    )
}
// import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
// import {userContext} from "../store/userContext";

// export default function Account(){

//     const [name,setName]= useState('');
//     const [id,setId]= useState('');
//     const [password,setPassword]= useState('');
    
//     const [idError,setIdError]= useState('');
//     const [passwordError,setPasswordError]= useState('');
//     const [confirmError,setConfirmError]= useState('');

//     const [isIdCheck,setIsIdCheck]= useState(false); //중복검사 했는지 안했는지
//     const [isIdAvailable,setIsIdAvailable]= useState(false); //아이디 사용 가능한지

//     const onChangeIdHandler = (e) => {
//         const idValue = e.target.value;
//         setId(idValue);
//         idCheckHandler(idValue);
//       }
    
//       const onChangePasswordHandler = (e) => {
//         const { name, value } = e.target;
//         if (name === 'password') {
//           setPassword(value);
//           passwordCheckHandler(value, confirm);
//         } else {
//           setConfirm(value);
//           passwordCheckHandler(password, value);
//         }
//       }

//       const idCheckHandler = async (id) => {
//         const idRegex = /^[a-z\d]{5,10}$/;
//         if (id === '') {
//           setIdError('아이디를 입력해주세요.');
//           setIsIdAvailable(false);
//           return false;
//         } else if (!idRegex.test(id)) {
//           setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
//           setIsIdAvailable(false);
//           return false;
//         }
//         try {
//           const responseData = await idDuplicateCheck(id);
//           if (responseData) {
//             setIdError('사용 가능한 아이디입니다.');
//             setIsIdCheck(true);
//             setIsIdAvailable(true);
//             return true;
//           } else {
//             setIdError('이미 사용중인 아이디입니다.');
//             setIsIdAvailable(false);
//             return false;
//           }
//         } catch (error) {
//           alert('서버 오류입니다. 관리자에게 문의하세요.');
//           console.error(error);
//           return false;
//         }
//       }

//       const passwordCheckHandler = (password, confirm) => {
//         const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
//         if (password === '') {
//           setPasswordError('비밀번호를 입력해주세요.');
//           return false;
//         } else if (!passwordRegex.test(password)) {
//           setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
//           return false;
//         } else if (confirm !== password) {
//           setPasswordError('');
//           setConfirmError('비밀번호가 일치하지 않습니다.');
//           return false;
//         } else {
//           setPasswordError('');
//           setConfirmError('');
//           return true;
//         }
//       }

//       const signupHandler = async (e) => {
//         e.preventDefault();
        
//         const idCheckresult = await idCheckHandler(id);
//         if (idCheckresult) setIdError('');
//         else return;
//         if (!isIdCheck || !isIdAvailable) {
//           alert('아이디 중복 검사를 해주세요.');
//           return;
//         }
    
//         const passwordCheckResult = passwordCheckHandler(password, confirm);
//         if (passwordCheckResult) { setPasswordError(''); setConfirmError(''); }
//         else return;
    
//         try {
//           const responseData = await signup(id, password, confirm);
//           if (responseData) {
//             localStorage.setItem('loginId', id);
//             setOpenModal(true);
//           } else {
//             alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
//           }
//         } catch (error) {
//           alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
//           console.error(error);
//         }
//       }

//       const signupHandler = async (e) => {
//         e.preventDefault();
        
//         const idCheckresult = await idCheckHandler(id);
//         if (idCheckresult) setIdError('');
//         else return;
//         if (!isIdCheck || !isIdAvailable) {
//           alert('아이디 중복 검사를 해주세요.');
//           return;
//         }
    
//         const passwordCheckResult = passwordCheckHandler(password, confirm);
//         if (passwordCheckResult) { setPasswordError(''); setConfirmError(''); }
//         else return;
    
//         try {
//           const responseData = await signup(id, password, confirm);
//           if (responseData) {
//             localStorage.setItem('loginId', id);
//             setOpenModal(true);
//           } else {
//             alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
//           }
//         } catch (error) {
//           alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
//           console.error(error);
//         }
//       }

//     const boxStyle={
//         width:'300px', 

//         display:'flex', 
//         flexDirection:'column', 
//         aliignItems:'center',
        
//         backgroundColor:'#FFFFFF'
//     }
//     const inputStyle ={
//         width:'200px'
//     }


    
//     const navigate = useNavigate();
//     return(
//         <div>
//             <form method="create" style={boxStyle}>
//             번거롭게 만드는 회원가입 창
//                 <input style={inputStyle} placeholder="이름"/>
//                 <input style={inputStyle} placeholder="아이디"/>
//                 <input style={inputStyle} placeholder="비밀번호"/>
//                 <button onClick={onsubmit} style={inputStyle} >제출</button>
//             </form>
//         </div>
//     )
// }