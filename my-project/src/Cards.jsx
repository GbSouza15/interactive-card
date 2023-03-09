import Form from "./Form.jsx";

export function Cards({ setName, setNumber }) {
    return (
        <>
            <div className='card-back'>
                <img className="min-[1024px]:absolute min-[1024px]:top-[18rem] min-[1024px]:left-[12rem] min-[1024px]:w-[20rem] absolute top-[2rem] w-[17rem] right-5 min-[668px]:right-[7rem]" src="../interactive-card-details-form-main/images/bg-card-back.png"/>
                <div>
                    <span className='absolute top-[5.8rem] right-[3.5rem] min-[668px]:right-[9rem]'></span>
                </div>
            </div>

            <div className="card-front">
                <img className="min-[1024px]:absolute min-[1024px]:top-[10rem] min-[1024px]:left-[8rem] min-[1024px]:w-[20rem] absolute top-[8rem] w-[17rem] left-5 min-[668px]:left-[7rem]" src="../interactive-card-details-form-main/images/bg-card-front.png"/>
                <div className='text-white'>
                    <span className='cardNumber absolute left-[3rem] top-[12.2rem] text-[1.2rem] min-[668px]:left-[8.5rem]'>{setNumber.length >= 1 ? setNumber.match(/.{1,4}/g).join(" ") : '0000 0000 0000 0000'}</span>
                    <span className='cardHoulderName absolute left-[3rem] top-[14.5rem] min-[668px]:left-[8.5rem]'>{setName || 'XXXXXXXXX'}</span>
                    <span className='cardExpDate absolute left-[13.3rem] top-[14.5rem] min-[668px]:left-[18.8rem]'></span>
                </div>
            </div>
        </>
    )
}

// export function CardFront({ cardInformations }) {
//
//     return (
//         <div className="card-front">
//             <img className="min-[1024px]:absolute min-[1024px]:top-[10rem] min-[1024px]:left-[8rem] min-[1024px]:w-[20rem] absolute top-[8rem] w-[17rem] left-5 min-[668px]:left-[7rem]" src="../interactive-card-details-form-main/images/bg-card-front.png"/>
//             <div className='text-white'>
//                 <span className='cardNumber absolute left-[3rem] top-[12.5rem] text-[1.2rem] min-[668px]:left-[8.5rem]'>{cardInformations.cardNumber || '0000 0000 0000 0000'}</span>
//                 <span className='cardHoulderName absolute left-[3rem] top-[14.5rem] min-[668px]:left-[8.5rem]'>{cardInformations.cardName || 'XXXXXXX'}</span>
//                 <span className='cardExpDate absolute left-[13.3rem] top-[14.5rem] min-[668px]:left-[18.8rem]'>{cardInformations.cardExpDateMM || '00'}/ {cardInformations.cardExpDateYY || '00'}</span>
//             </div>
//         </div>
//     )
// }
//
// export function CardBack() {
//
//
//     return (
//         <div>
//             <img className="min-[1024px]:absolute min-[1024px]:top-[18rem] min-[1024px]:left-[12rem] min-[1024px]:w-[20rem] absolute top-[2rem] w-[17rem] right-5 min-[668px]:right-[7rem]" src="../interactive-card-details-form-main/images/bg-card-back.png"/>
//             <div>
//                 <span className='absolute top-[5.8rem] right-[3.5rem] min-[668px]:right-[9rem]'></span>
//             </div>
//         </div>
//     )
// }
