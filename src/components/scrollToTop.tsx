import { useEffect, useState } from "react";



export const  ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
    return (
        <div>
          <div style={{height: '10rem'}} />
          {/* 👇️ scroll to top on button click */}
          {showTopBtn && 
             <button
             onClick={() => {
               window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
             }}
             style={{
               position: 'fixed',
               padding: '1rem 2rem',
               fontSize: '20px',
               bottom: '40px',
               right: '40px',
               backgroundColor: 'slateblue',
               color: '#fff',
               textAlign: 'center',
             }}
           >
             Scroll to top
           </button>
          }
       
        </div>
      );
    }