import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
// ye work nhi krega beacuse render funtion react me define kiya hai apne ko nhi pta hai kya para expect kr ra 

// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     text: "Googleeee",
//   };
  

function MyApp(){
    return <div>Ram ram ji</div>
}
const MyElem = React.createElement(
    'a',
    {href :'https://google.com' , target:"_balnk"} ,
    'click me guys'
)
ReactDOM.createRoot(document.getElementById('root')).render(
//   ReactElement
//    MyApp()
MyElem
)
