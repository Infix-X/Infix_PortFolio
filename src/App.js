
import { useEffect, useState } from 'react';
import './App.css';
import  Button  from './Component/Button';
import Card from './Component/Card';
import { ThemeContextProvider } from './ThemeMode';
function App() {
  const [ThemeMode,setThemeMode] = useState("Light");

  const LightTheme = (e)=>{
    setThemeMode("Light")

  }
  const DarkTheme = (e)=>{
    setThemeMode("Dark")

  }
  //acctaual changes here
  useEffect(()=>{
    document.querySelector('html').classList.remove("Light","Dark")
    document.querySelector('html').classList.add(ThemeMode);

  },[ThemeMode])
  return (
   <ThemeContextProvider value={{ThemeMode,LightTheme,DarkTheme}}>
    <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
              <Button/>
          </div>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
              <Card/>
          </div>

        </div>

    </div>
    </ThemeContextProvider>
  );
}

export default App;
