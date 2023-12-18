import React, { useEffect, useState } from 'react'
export default function useCurrencyCustomHook(currency) {


    const [currData, setCurrData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

            .then((res) => res.json())
            .then((res) => setCurrData(res[currency]))
        console.log(currData);
    }, [currency])

    return currData


}

