// import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';
// import Counter from "./components/counter";
// import FormikContainer from './components/FormikContainer'
//  import RegistrationForm from "./components/rejestrationForm";
// import Calculator from './components/calculater';
// function App(){
//     return (
//         <div className="App">
//             {/* <Counter/> */}
//            <Calculator/>
//         </div>
//     );
// }
const App = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {userData ? (
        <WelcomeMessage data={userData} />
      ) : (
        <LoginForm onSubmit={handleLogin} />
      )}
    </div>
  );
};
// ReactDOM.render(
//   <React.StrictMode>
//     <RegistrationForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default App;


