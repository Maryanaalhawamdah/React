import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Image from './img/logome.png';
import Image1 from './img/Maryana.png';
import Image2 from './img/من دون عنوان.png';
import Image3 from './img/project.png';
import Image4 from './img/project1.png';
import Image5 from './img/fast.png';
import Image6 from './img/seastar.jpg';
import Image7 from './img/darlig.jpg';
import Image8 from './img/Akadymy.jpg';



import CV from './img/cv.pdf';

let url = 'http://127.0.0.1:5502/maryana.html';
let url1 =  'https://maryanaalhawamdah.github.io/project2/';
let url2 = 'https://maryanaalhawamdah.github.io/mini_project/';
let url3 =  'https://miro.com/app/board/uXjVM_lZ51Y=/';


const px='15%';
const black='#000';
const color='#3b48ab';
const color1='#782f93';
const color2='#ac2f78';
const color3='#2a4b83';
const pw='80%';
const ph='55%';
const pn='30px';
const pr='50px';
const ps='70%';
const pm='50%';
const pc='25px';
const pa='90px';

const center='center';
const App = () => {
  return (
    <>
    
 

 <section className="firstsection">
           
           <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href="#"><img src={Image} style={{width:px}}/></a>
           <a className="navbar-brand" href="#objectsection">Home</a>
           <a className="navbar-brand" href="#categories">Education</a>
           <a className="navbar-brand" href="#project">Projects</a>
           <a className="navbar-brand" href="#Experience">Experience</a>
           <a className="navbar-brand" href="#skills">Skills</a>
           <a className="navbar-brand" href="#Contact">Contact me</a>
           </nav>
                       
 </section> 

  <section id="objectsection">
            <div className="ob-container">
                <div className="ob-sec">
                  <h1>Maryana Mohammad<br/> Al-Hawamdeh</h1>
                  <p style={{fontsize: pn }}>Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.</p>
                  <button > 
                  <a  href={CV} title=""  target="_blank"    style={{color:black} } > Download my CV.</a>
                  </button>
                </div>
                <div className="obb-sec">
                  <img src={Image1} alt="Maryana" style={{width:pw,height:ph}} />
                </div>
             </div>

   </section>
        <br/> 
        <h2 className="line"></h2>


<section id="categories">
    <h2 style={{textalign: center}}   >Education</h2><br/><br/>
    <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>Alshamlah High school</h2>
            <h4>2006-2007</h4>
            <p></p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Alhussain in Talal Univercity</h2>
            <h4>2007-2011</h4>
            <p>Software Engenering</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Orang Akadmy Coding</h2>
            <h4>2023</h4>

            <p>Web Developer</p>
          </div>
        </div>
      </div>
       
</section>
<br/>
<h2 className="line"></h2>
        <section  id="project">
            <h2  style={{textalign: center}} >Projects</h2>
            <div className="pr-cotainer">

                <div className="project3-card">
                    <a href={url}   target="_blank"><img src={Image2} alt="project4" style={{width:pw,height:pw}}/></a>
                    <div className="pr-container pr-center">
                      <p>Portfolio project</p>
                    </div>
                  </div>
               
                <div className="project-card">
                    <a href={url1} target="_blank"><img src={Image3} alt="project2" style={{width:pw,height:pw}} /></a>
                    <div className="pr-container pr-center">
                      <p>Colorlib project</p>
                    </div>
                  </div>

              <div className="project1-card">
                <a href={url2} target="_blank"><img src={Image4} alt="project1" style={{width:pw,height:pw}}/></a>
                <div className="pr-container pr-center">
                  <p>Pizza choclate project</p>
                </div>
              </div>
              
              <div className="project2-card">
                <a href={url3} target="_blank"><img src={Image5} alt="project3" style={{width:pw,height:pw}}/></a>
                <div className="pr-container pr-center">
                  <p>Fast Clean</p>
                </div>
              </div>

             
            </div>

        </section>
        <br/>
        <h2 className="line"></h2>


<section id="Experience">
      <h2  style={{textalign: center}} >Experience</h2>
      <div className="Ex-container">
          <div className="Ex3-card" style={{width:pm}}>
              <img src={Image8} alt="Academy" style={{width:ps, height:ps}}/>
                 <div className="Ex-container Ex-center">
                   <p style={{paddingleft:pm}}>Team work/web Developer<br/>6/2023-11/2023</p>
                 </div>
          </div>
        <div className="Ex-card" style={{width:pm}}>
            <img src={Image7} alt="darlig" style={{width:ps, height:ps}}/>
               <div className="Ex-container Ex-center">
                <p style={{paddingleft:pm}}>Human Resources and support services<br/>2021-2023</p>
              </div>
          </div>
            <div className="Ex2-card" style={{width:pm}}>
               <img src={Image6} alt="seastar" style={{width:ps, height:ps}}/>
                  <div className="Ex-container Ex-center">
                    <p style={{paddingleft: pm}}>Human Resources and support services<br/>2019-2021</p>
                  </div>
           </div>
    </div>

 </section>
 <br/>
 <h2 className="line"></h2>

    
    <section id="skills">
        <h2 style={{fontsize:pr,textalign: center}}>Skills</h2>
        <div className="sk_item">
            <ul className="sk_ul">
                <li><i className="fa-brands fa-html5" style={{color:color,fontsize:pa}}></i></li>
                <li><i className="fa-brands fa-css3-alt" style={{color:color1,fontsize:pa}}></i></li>
                <li><i className="fa-brands fa-bootstrap" style={{color:color2,fontsize:pa}}></i></li>
                <li>
                    <i className="fa-brands fa-square-git" style={{color:color3,fontsize:pa}}></i>
                </li>
            </ul>
            
        </div>


    </section>
    <br/><br/>
    <h2 class="line"></h2>

<section id="Contact">
    <h2 style={{fontsize:pr,textalign: center}}>Contact Me</h2>
    <div class="contact_item">
       <form class="con_it">
        
          <label for="name">Your Name:</label>
          <input type="text" name="name" />
          <label for="email">Your Email:</label>
          <input type="email" name="email" />
          <label for="message">Your message:</label>
          <textarea name="message" rows="4" cols="40"></textarea>
          <input type="submit" value="send to me"style={{fontsize:pc}}/>
        </form>
    </div>
 </section>
 <br/>
    <h2 class="line"></h2>



<footer>
     
<section id="fo">
    <div class="fo_item">
        <a href="maryana.alhawamdah@gmail.com"   target="_blank"> <i class="fa-solid fa-envelope " style={{color: '#040404', fontSize: '40px'}}>   </i></a>
        <a  href="" target="_blank"> <i class="fa-solid fa-mobile-screen-button" style={{color: '#060606',fontSize: '40px'}}> </i> </a>
    
   
       
         <a  href="https://github.com/Maryanaalhawamdah"  target="_blank"  ><i class="fa-brands fa-square-github " style={{color: '#050505', fontSize:'40px'}}></i></a>
        <a  href="https://www.linkedin.com/in/maryana-alhawamdah-066a56279/"  target="_blank"> <i class="fa-brands fa-linkedin " style={{color: '#0b0b0b',fontSize:'40px'}}></i></a>
    </div>

    
</section>


</footer>


    </>
  );
};

export default App;
