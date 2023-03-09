 import Form from "./Form.jsx";
 // import { CardFront, CardBack } from "./Cards.jsx";
 import { useState } from "react";
 import { Cards } from "./Cards.jsx";

 function App() {

    const [cardName, setCardName] = useState('')
     const [cardNumber, setCardNumber] = useState('')


  return (
    <div className="App font-spacegrotesk min-[1024px]:flex">
        <img className="w-[100%] h-[15rem] min-[1024px]:h-[100vh] min-[1024px]:w-[26rem]" src="../interactive-card-details-form-main/images/bg-main-mobile.png"/>
        <Cards setName={cardName} setNumber={cardNumber}/>
        <Form
            catchName={(e) => setCardName(e)} sendName={cardName}
            catchNumber={(e) => setCardNumber(e)} sendNumber={cardNumber}
        />
    </div>
  )
}

export default App
