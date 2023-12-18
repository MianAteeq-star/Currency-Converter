import { useState } from "react";
import InputBox from "./inputBox/InputBox";
import img from './assets/img/mian.jpeg'
import useCurrencyCustomHook from "./hooks/useCurrencyCustomHook";
function App() {


const [amount, setAmount]=useState(0)
const [convertCurrency, setConvertCurrency]=useState(0)
  const [to,setTo]=useState("uri")
const [from,setFrom]=useState("usd")


const currencyInfo= useCurrencyCustomHook(from)

 const options=Object.keys(currencyInfo)
 console.log(options);

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertCurrency(amount)
  setAmount(convertCurrency)
}

const convert =()=>{
  setConvertCurrency(amount * currencyInfo[to])
  console.log(convertCurrency);
}

  return (
    <>
    <div className="flex flex-wrap justify-center items-center w-full h-screen bg-no-repeat bg-cover "  style={{
                backgroundImage: `url('https://images.pexels.com/photos/36366/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200')`,
            }}>
   

      <div className="w-full flex items-center">
      <div className="justify-center">
        <img src={img} alt="image" 
        className="rounded-full"
       width={400}/>
      </div>
        
        <div className="w-full max-w-md mx-auto rounded-xl border-gray-400 p-5 backdrop-blur-sm bg-white/40">
          <form 
          onSubmit={(e)=>{
            e.preventDefault()
            
          }}
          >

<div className="w-full mb-2">

      <InputBox
      label={"From"}
      amount={amount}
currencyOptions={options}
onCurrencyChange={
  (currency)=> setFrom(currency)
}
onAmountChange={
  (amount)=>setAmount(amount)
 }
 selectCurrency={from}
      />
      
</div>
<div className="relative w-full h-1">
    <button
    type="button"
    className="absolute bg-blue-600  left-1/2 px-3 py-2 rounded-lg -translate-x-1/2 -translate-y-1/2 border-white border-2"
  onClick={swap}
    >swap</button>
  </div>
<div className="w-full mt-1 mb-4">

      <InputBox 
      label={"To"}
      currencyOptions={options}
      amount={convertCurrency}
      onCurrencyChange={(currency)=>setTo(currency)}
      selectCurrency={to}
      />
</div>

<div className="w-full">
  <button type="button" className="w-full mx-auto bg-blue-800 text-white py-3 rounded-xl" onClick={convert}> 
    Convert {from.toUpperCase()} to {to.toUpperCase()}
  </button>
</div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
