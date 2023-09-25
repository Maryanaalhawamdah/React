// import React from 'react';
// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom';
// // import LoginForm from './components/LoginForm';
// // import WelcomeMessage from './components/WelcomeMessage';
// import Counter from "./components/counter";
// // import RegistrationForm from "./components/rejestrationForm";
// import Calculator from './components/calculater';
// function App(){
//     return (
//         <div className="App">
//             <Counter/>
//            <Calculator/>
//         </div>
//     );
// }
// const App = () => {
//   const [userData, setUserData] = useState(null);

//   const handleLogin = (data) => {
//     setUserData(data);
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       {userData ? (
//         <WelcomeMessage data={userData} />
//       ) : (
//         <LoginForm onSubmit={handleLogin} />
//       )}
//     </div>
//   );
// };
// ReactDOM.render(
//   <React.StrictMode>
//     <RegistrationForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// export default App;

// ****************************************************
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Regester from "./components/regestrationForm";
import Counter from "./components/counter";
import Calculater from "./components/calculater";
import Login from "./components/LoginForm";
import WelcomeMessage from "./components/WelcomeMessage";


export default function App(){
 return (
    <BrowserRouter >
    <Routes>
   <Route path="/" element= {<Regester/>}/>
  <Route path="counter" element={<Counter/>}/>
  <Route  path="calculator"element={<Calculater />}/>
  <Route path="LoginForm" element={<Login/>}/>
  <Route path="welcome" element={<WelcomeMessage/>}/>



    </Routes>
    
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);