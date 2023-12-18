import React, { useId } from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
currencyOptions=[],
selectCurrency="usd"

})

{
  const amountId= useId
  return (
    
    <div className="flex justify-center items-center  bg-white p-3 text-sm  shadow-xl rounded-lg">
        <div className="w1/2 ">
            <label className='mb-2 inline-block ' htmlFor={amountId}> {label}</label>

            <input type="number" 
            id={amountId}
            placeholder='Amount'
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            className='w-full py-2 bg-transparent outline-none '
            />
        </div>
        <div className="w1/2 flex  flex-wrap justify-end text-right">
            <label className=' text-black/40 w-full inline-block mb-2' > Currency Type</label>
            <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) }  
                >
                    
                        {
                          currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}> {currency}</option>
                          ))
                        }
                
                </select>
      </div>
    </div>
  )
}
