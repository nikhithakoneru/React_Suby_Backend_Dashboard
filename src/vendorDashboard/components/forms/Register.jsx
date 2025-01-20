import React, {useState} from 'react'
import { API_URL} from '../../data/apiPath'

const Register = ({showLoginHandler}) => {
  const [username, setUsername]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]= useState("")
  const [loading, setLoading]=useState(true)


  //to prevent form refresh

  const handleSubmit = async(e)=>{
    e.preventDefault();
  try{
    const response = await fetch(`${API_URL}/vendor/register`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password})
    })

    const data = await response.json();
    
    if(response.ok){
      console.log(data);
      setUsername("")
      setEmail("");
      setPassword("");
      alert("vendor registered successfully")
      showLoginHandler()
    } else {
      setError(data.error) // Make sure to handle failure case properly
    }
  } catch(error){
    console.log("registration failed", error);
    alert("Registration failed")
  }
  }

  return (
    <div className="registerSection">
         <form className='authForm' onSubmit={handleSubmit}>
        <h3>Vendor Register</h3>
            <label>Username</label> 
            <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter your name'/> <br />
            <label>Email</label> 
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/> <br />
            <label>Password</label> 
            <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/> <br />

        <div className="btnSubmit">
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Register


// import React, { useState } from 'react';
// import { API_URL } from '../../data/apiPath';

// const Register = ({ showLoginHandler }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);  // Set loading initially as false

//   // To prevent form refresh
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state to true while the request is in progress

//     try {
//       const response = await fetch(`${API_URL}/vendor/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log(data);
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         alert('Vendor registered successfully');
//         showLoginHandler(); // Redirect to login or handle login form
//       } else {
//         setError(data.error || 'Registration failed');
//       }
//     } catch (error) {
//       console.log('Registration failed', error);
//       setError('Registration failed due to a network error');
//     } finally {
//       setLoading(false); // Set loading state back to false after request is complete
//     }
//   };

//   return (
//     <div className="registerSection">
//       <form className="authForm" onSubmit={handleSubmit}>
//         <h3>Vendor Register</h3>
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your name"
//         />{' '}
//         <br />
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />{' '}
//         <br />
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />{' '}
//         <br />
//         {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//         <div className="btnSubmit">
//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
