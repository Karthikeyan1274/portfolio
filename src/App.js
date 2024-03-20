

import Intro from './intro';
import Edu from './Edu';
import  ColorSchemesExample from'./nav'
import Skill from './Skill';
import About from './about';
import Contact from './Contact';
function App() {
  return (
   <>
   <div className='backcol' style={{backgroundColor:'lightgrey'}}>
   < ColorSchemesExample/>
   < Intro/>
   <Edu/>
   <Skill/>
   <About/>
   <Contact/>

   
   </div>
   </>
  );
}

export default App;
