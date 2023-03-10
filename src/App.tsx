import { useEffect, useState } from 'react';
import './App.css';
import rotate from './assets/rotate-phone.png'
import { Rose } from './components/rose';

const getOrientation = () =>
  window.screen.orientation.type;

function App() {

  const [orientation, setOrientation] = useState<string>(getOrientation());
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const updateOrientation = () => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener(
      'orientationchange',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'orientationchange',
        updateOrientation
      )
    }
  }, [])

  return (
    <>
      {/* {
        orientation !== 'landscape-primary' ?
          <>
            <div className='div-orientation'>
              <img src={rotate} alt="" style={{ height: 150 }} />
              <p>Gire seu telefone para uma <span>melhor experiência!</span></p>
            </div>
          </> :
          <>
            {showMessage ?
              <>
                <Rose />
              </> :
              <>
                <div className="container">
                  <div className="wrapper">
                    <div className="static-txt">
                      Do you
                    </div>
                    <ul className="dynamic-txts">
                      <li>
                        <span>think the surprise is over?</span>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setShowMessage(!showMessage)}>
                    See more
                  </button>
                </div>
              </>
            }
          </>
      } */}
      {showMessage ?
              <>
                <Rose />
              </> :
              <>
                <div className="container">
                  <div className="wrapper">
                    <div className="static-txt">
                      Any surprise is not
                    </div>
                    <ul className="dynamic-txts">
                      <li>
                        <span>lated for you</span>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setShowMessage(!showMessage)}>
                    See more
                  </button>
                </div>
              </>}
    </>
  );
}

export default App;
