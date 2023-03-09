import { useState } from "react";

export default function Form({ catchName, sendName, catchNumber, sendNumber }) {

    // let cardInfos = {}

    // function handleClick(e) {
    //
    //     cardInfos.cardName = document.querySelector('.cardName')
    //     cardInfos.cardNumber = document.querySelector('.cardNumber15')
    //     cardInfos.cardExpDateMM = document.querySelector('.cardExpDateMM')
    //     cardInfos.cardExpDateYY = document.querySelector('.cardExpDateYY')
    //     cardInfos.cvc = document.querySelector('.cvcThis')
    //
    //     let numberFormater = cardInfos.cardNumber.value.match(/.{1,4}/g).join(" ")
    //     console.log(numberFormater)
    //
    //     e.preventDefault()
    //
        // const mapCardInfos = {
        //     cardName: cardInfos.cardName.value,
        //     cardNumber: numberFormater,
        //     cardExpDateMM: cardInfos.cardExpDateMM.value,
        //     cardExpDateYY: cardInfos.cardExpDateYY.value,
        //     cvc: cardInfos.cvc.value
        // }
    //
    //     onChanges(mapCardInfos)
    // }

    function handleClick(e) {
        e.preventDefault()
    }

    return (
        <form className="flex flex-col mt-[6rem] mx-auto my-0 px-5 gap-5 md:max-w-[458px] min-[1024px]:mt-[25vh]">
            <label className="flex flex-col gap-2">
                CARDHOULDER NAME
                <input value={sendName} onChange={(e) => catchName(e.target.value)} className="cardName border-[1px] border-gray-300 rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. Gabriel Souza" maxLength='15'/>
            </label>
            <label className="flex flex-col">
                CARD NUMBER
                <input value={sendNumber} onChange={(e) => catchNumber(e.target.value)} className="cardNumber15 border-[1px] border-gray-300 rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. 0000 0000 0000 0000" maxLength='16'/>
            </label>

            <div className="flex gap-5">
                <label className="flex flex-col">
                    EXP. DATE (MM/YY)
                    <div className="flex gap-5">
                        <input className="cardExpDateMM border-[1px] border-gray-300 w-[4rem] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="MM" maxLength='2'/>
                        <input className="cardExpDateYY border-[1px] border-gray-300 w-[4rem] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="YY" maxLength='2'/>
                    </div>
                </label>

                <label className="flex flex-col w-[100%]">
                    CVC
                    <input className="cvcThis border-gray-300 border-[1px] rounded-[.5rem] p-2 w-[100%]" type="text" placeholder="Ex. 123" maxLength='3'/>
                </label>
            </div>

            <button className="btnSubmit bg-[#220930] text-white rounded-[.5rem] p-3" onClick={handleClick}>Confirm</button>
        </form>
    )
}