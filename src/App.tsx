import { useEffect } from 'react'
import { initializationTheme } from './utils/theme';
import './index.css'
import APPRoutes from './routes';

function App() {

  useEffect(()=> {
    initializationTheme()
  }, 
  [])
 
  return (
    <div 
      className="
        font-roboto 
        dark:bg-gradient-to-r
        dark:from-darkPrimaryBg 
        dark:to-darkSecondBg "
      >
        <APPRoutes/>
    </div>
  );
}

export default App;
