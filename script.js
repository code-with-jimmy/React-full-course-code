// ============================
// React course 😅😅😅
// =============================

// ==================
// #1 video course?
// ===================

// Complate karenge?
// 1. React basic 
// 2. React intermediate 
// 3. React advance 
// 4. Mini project 
// 5. Mega project 

// Introduction 
// 1. Introduction to react.js
// 2. History of react.js
// 3. Why react.js over vanilla JavaScript 
// 4. Setting up development environment 
// 5. Creating react.js project 




// =================
// #2 video course?
// =================

// How to install react.js
// 1. install in react.js



// =================
// #3 video course?
// =================

// 5 tips more the?
// 1. regular Practice 
// 2. Joined convertion help and ask?
// 3. Explore additional resources (chatgpt, gemini ,other video)
// 4. Apply in real-world use your work case?
// 5. Review and revise?




// ================
// #4 video course?
// ================

// 1. Node_moduls => (it's no tuch)
// 2. Public => (this is folder in like image, photos,)
// 3. Src =>  (this is in file source main)
// 4. Eslintrc.js => (error cath and High do show)
// 5. Gitingnore => (Gitingnore private data)
// 6. Index.html => (HTML file in web browser)
// 7. Packege.json => (script, bun dev, npm, etc)


// Naming conventions 
// ==================
// 1. camelCase 
// 2. PascalCase
// 3. snake_case
// 4. kabab-case




// ================
// #5 video course?
// ================


// step 1
// ======>

// function Tt() {
//   return <div> <h1>Namaste Bhai 🚀</h1>
//       <p>Mera React app</p> 
//       </div>
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<Tt />);



// step 2
// =====>

// const Lll = () => {
//   return React.createElement("h1", null, "thapa")
// }

// ReactDOM.createRoot(document.getElementById("op")).render(<Lll/>)



// step 3 virtual dom
// ==================>


// const Lll = () => {
//   return <h1>Namaste Bhai 🚀</h1>
// }

// console.log(React.createElement("h1", null, "thapa"));

// ReactDOM.createRoot(document.getElementById("op")).render(<Lll/>)




// ================
// #6 video course?
// ================

// React componet?
// ===============

// const Lll = () => {
//   return <div>
//     <NetWork/>
//     <NetWork/>
//     <NetWork/>
//     <NetWork/>
//     </div>

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Lll/>)


// reuseble code in compnet

// const NetWork = () => {
//   return (
//     <h1>hello guys</h1>
//   )
// }





// ================
// #7 video course?
// ================


// const Ultimate = () => {
//   // return [<User key="1"/>, <User key="2"/>]
    
    
//   return <>             
//     <User/>
//     <User/>
//     </>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Ultimate/>)


// const User = () => {
//   return (
//   <h1>My fragment react</h1>
//   )
// }





// ================
// #8 video course?
// ================

// add dynamic value 
// =================

// const Ultimate = () => {
//   return ( 
//       <>
//       <Show/>
//       <Show/>
//       <Show/>
//       </>
//   )
// }


// ReactDOM.createRoot(document.getElementById("root")).render(<Ultimate/>)



// // secend function 2

// const Show = () => {
//   const name = "jimmy";
  
//   const Roomi = () => {
//   const Cap = "RomCom";
//   return Cap;
// }

//   return ( <>
//   <h1>Hello {name} {2 + 4.6} ho</h1>
//   <p>name: {Roomi()}</p>
//   </>
//   )
// }





// ================
// #9 video course?
// ================

// conditionals in jsx
// ===================



// let age = 19;

// let cach = (age >= 18) ? "watch now" : "not watch";



// const Show = () => {
//   const name = "jimmy";

//   return ( <>
//   <h1>Hello {name} {2 + 4.6} ho</h1>
//   <button>{cach}</button>
//   </>
//   )
// }


// // secend function 2

// const Ultimate = () => {
//   return ( 
//       <>
//       <Show/>
//       <Show/>
//       <Show/>
//       </>
//   )
// }


// ReactDOM.createRoot(document.getElementById("root")).render(<Ultimate/>)






// ================
// #10 video course?
// ================

// interview qustion        👈👈👈
// =================


// const App = () => {
//   const student = [];
//   console.log(Boolean(student.length))
//   return(
//     <>
//       /1st
// <p>{student.length === 0 && "not"}</p>
      
//       2st
// <p>{!Boolean(student.length) && "not"}</p>
 
//     3st
// <p>student length: {student.length}</p>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// ================
// #11 video course?
// ================

// export and import
// =================

// 1. export 


// export const App = () => {
//   return (
//     <>
//       <h1>export this value</h1>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

// // export default App;



// // secend file me ye dalo    👈

// import {App, Name} from "./components/App";

// const Free = () => {
//   return (
//     <>
//       <App />
//       <App />
//       <Name/>
//     </>
//   );
// };


// // multiple componets and export  👈


// export const Name = () => {
//   return <h1>hello</h1>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Name/>)




// ================
// #12 video course?
// ================

// looping in map()
// =================



// const names = ["ram", "vinod", "jimmy"];               
//                         //global


// const App = () => {
//   return (
//   names.map((curl) => {
//     return (
//     <div key={curl}>
//     <h1>hello {curl}</h1>
//     </div>
//     )
//   })
//   )
// }

// const Riot = () => {
//   return (
//     <>
//     <App/>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Riot/>)




// ================
// #13 video course?
// ================


// const names = ["ram", "vinod", "jimmy"];               
// //                         //global


// const App = () => {
//   return (
// names.map((curl) => {
// return <Card key={curl} curl={curl}/>
//   })
//   )
// }

// const Riot = () => {
//   return (
//     <>
//     <App/>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Riot/>)




// // secend file

// const Card = (props) => {
//   return (
//     <>
//     <h1>hello {props.curl}</h1>
//     </>
// )
// }




// ================
// #14 video course?
// ================



// const names = ["ram", "vinod", "jimmy"];               
// //                         //global


// const App = () => {
//   return (
// names.map((curl) => {
// return <Card key={curl} data={curl}/>
//   })
//   )
// }

// const Riot = () => {
//   return (
//     <>
//     <App/>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Riot/>)




// // secend file

// const Card = (props) => {
//   let {data} = props;
//   return (
//     <>
//     <h1>hello {data}</h1>
//     </>
// )
// }



 

// ================
// #15 video course?
// ================

// fixed the Error chatgpt...
// ==========================




// =================
// #16 video course?
// =================

// passing jsx as props
// ====================


// function Profile() {
//   return(
//     <div>
//       <h1>hello jimmy!</h1>
//       <ProfileCard
//       name="Alex"
//       age={20}
//       greetline={
//         <div>
//         <h1>i am boy</h1>
//         </div>
//       }
//       >
//       <p>hobby : free fire</p>
//       <button>Watch</button>
//       </ProfileCard>
//     </div>
//   )
// }  



// const App = () => {
//   return (
//     <>
//     <Profile/>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// // secend 


// function ProfileCard({name, age, greetline, children}) {
//   return(
//     <>
//     <p>name:{name}</p>
//     <p>age:{age}</p>
//   <div>file:{greetline}</div>
//     <div>{children}</div>
//     </>
//   )
// }





// =================
// #17 video course?
// =================

// css style in react
// ==================


// css tarika only 5 

// tarika 1-2 external && inline

// const Filter = () => {
//   return(
//     <div>
//   <h1 className="contain">Hello</h1>
//     <p style={{color : "blue", fontSize : "20px"}}>hii iam jimmy and i am boy</p>
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Filter/>)




// traika 3 Internal
// ===================


// const Filter = () => {
//   const myStyle = {
//     color : "blue",
//     fontSize : "20px"
//   }
//   return(
//     <div>
//   <h1 style={myStyle}>Hello</h1>
//     <p>hii iam jimmy and i am boy</p>
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Filter/>)





// =================
// #18 video course?
// =================

// inline in css 
// =============

// const App = () => {
//   const Btn = {
//     color: "blue",
//     border: "2px solid blue",
//     backgroundColor: "transprant"
//   } 
//   return (
//     <>
//     <p style={{color: "blue"}}>hello i am blue</p>
//     <button style={Btn}>Here</button>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// =================
// #19 video course?
// =================

// Conditionals styling in react 
// ===========================

// const App = () => {
//   const age = 19;
  
//   const Rating = age >= 18 ? "super" : "hit";
  

//   return(
//     <>
//     <p>hello i am <span className={Rating}> {age}</span></p>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


 


// =================
// #20 video course?
// =================


// css modules in react 
// =====================


// const App = () => {
//   return(
//     <>
//     <h1 className={style.super}>hello i am module</h1>
//     </>
//   )
// }



// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// =================
// #21 video course?
// =================

// STYLED COMPONENTS IN REACT JS
// =============================

// ============================
// ❌❌❌❌❌❌❌❌❌❌❌❌❌
// ===========================

// const Jimmy = styled.h1`
//   background-color: "red";
//   font-size: "20px";
//   `

// const App = () => {
  
//   return(
//     <>
//     <h1>i am COMPONENTS</h1>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// =================
// #22 video course?
// =================

// TAILWIND CSS IN REACT JS
// =========================

// installing vit in TAILWIND
// ============================

// const App = () => {
//   return (
//     <div className="bg-blue-600 text-white p-5 rounded-xl m-4 text-center">
//       <h1 className="text-2xl font-bold">Hello Jimmy!</h1>
//       <p className="mt-2 text-blue-100">Tailwind Mobile me mast chal raha hai!</p>
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// =================
// #23 video course?
// =================

// EVENT HANDLING IN REACT
// =======================

// =========
// TARIKA 1
// =========

// const EventClik = () => {
//   // function handLer(){
//   //   alert("hey i am happy");
//   // }                       
//                           // 1tarika
  
//   const EventClik = (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
//     alert("hey i am happy");
//   }
  
//     let MyReact = {
//     background: "blue",
//     padding:"10px"
//   }
//   return(
//     <>
//     <button style={MyReact} onClick={EventClik}>Click me</button>
//     </>
//   )
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<EventClik/>)


// =========
// TARIKA 2
// =========

// USING FAT ARROW FUNC.
// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈


// const EventCliking = () => {

//       const EventClik = (event) => {
//         console.log(event);
//         console.log(event.target);
//         console.log(event.type);
//         alert("hey i am happy");
//       }
      
//     const EventClike = (user) => {
//       console.log(`${user} i am happy`)
//       }
      

//         let MyReact = {
//         background: "blue",
//         padding:"10px"
//       }
//       return(
//         <>
//           1st
//         <button style={MyReact} onClick={(event) => EventClik(event)}>Click me</button>
        
//         2st
// <button style={MyReact} onClick={() => alert("hey iam")}>Click me i am inline</button>
        
//               3st
//         <button style={MyReact} onClick={(event) => EventClike("jimmy")}>Click me?</button>
//         </>
//       )
//     }
//     ReactDOM.createRoot(document.getElementById("root")).render(<EventCliking/>)
 



// =================
// #24 video course?
// =================

// EVENTS AS PROPS IN REACT
// =========================

// parent to child

// const Child = (prop) => {
//   return(
//     <>
//     <button onClick={prop.pataNahi}>child</button>
//     </>
//   )
// }

// const App = () => {
//   const keys = () => {
//     alert("hi am parent kya sahi ha")
//   }
//   return(
//     <>
//     <button onClick={keys}>papa me</button>
    
//     <Child pataNahi={keys}></Child>
    
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// child to parent


// const Child = (prop) => {
//   return(
//     <>
//     <button onClick={() => prop.pataNahi("jimmy")}>child</button>
//     </>
//   )
// }

// const App = () => {
//   const keys = (name) => {
//     alert("hi am parent kya sahi ha " + name)
//   }
//   return(
//     <>
//     <button onClick={keys}>papa me</button>
    
//     <Child pataNahi={keys}></Child>
    
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// =================
// #25 video course?
// =================

// REACT EVENT PROPAGATION
// =========================


// const grandPrant = () => {
//     console.log("i am grandPrant");
// }

// const parent = () => {
//      console.log("i am parent");
// }

// const child = (e) => {
// //   e.stopPropagation()     //only chid
//     console.log("me child")    
// }


// const App = () => {
// return(
//   <>
//  <div onClick={grandPrant}>
//    <div onClick={parent}>
//         <button onClick={child}>child click</button>
//   </div>
    
//     </div>
//       </>
//         )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// ≈≈≈≈≈≈≈≈≈≈
// Capture
// ≈≈≈≈≈≈≈≈≈≈


// const grandPrant = () => {
//     console.log("i am grandPrant");
// }

// const parent = () => {
//      console.log("i am parent");
// }

// const child = (e) => {
// //   e.stopPropagation()     //only chid
//     console.log("me child")    
// }


// const App = () => {
// return(
//   <>
//  <div onClickCapture={grandPrant}>
//    <div onClickCapture={parent}>
//         <button onClickCapture={child}>child click</button>
//   </div>
    
//     </div>
//       </>
//         )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)






// ===================
// #26 video course?
// ==================


// STATE IN REACT JS
// =================

// import  {useState} from "react"; //npm using pc



// const App = () => {
        
// const [count, setCount] = useState(0);

// const handeler = () => {
//         setCount(() => count + 1)
// }
        
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={handeler}>click</button>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// ===================
// #27 video course?
// ===================


// HOW REACT STATE WORKS?
// ======================





// const App = () => {
        
// const [count, setCount] = React.useState(0);
// console.log("i am parent")

// const handeler = () => {
//         setCount(() => count + 1)
// }
        
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={handeler}>click</button>
//         <Child count={count}/>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


// const Child = ({count}) => {
//     console.log("i am child jimmy");
//     return(
//         <>
//         <h2>hello jimmy - {count}</h2>
//         </>
//     )
// }




if (true) {
  
}

// STATE NOT RESETTING ON RE-RENDER
// ===============================


// const App = () => {
        
// const [count, setCount] = React.useState(0);
// console.log("i am parent")

// const handeler = () => {
//         setCount(() => count + 1)
// }
        
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={handeler}>click</button>
//         <Child count={count}/>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


// const Child = ({count}) => {
//     console.log("i am child jimmy");
//     return(
//         <>
//         <h2>hello jimmy - {count}</h2>
//         </>
//     )
// }




// ===================
// #29 video course?
// ===================

// USESTAТЕ НООK CHALLENGE
// =======================



// const users = [
//   {name : "jimmy", age : 19},
//   {name : "vinod", age : 39},
// {name : "ram", age : 27},
// {name : "sumit", age : 18}

// ];



// const App = () => {
  
//   return(
//     <>
//     <h1>user list</h1>
//     <ul>
//       {users.map((curl, index) => {
//   return(

//     <li key={index}>
//       {curl.name} - {curl.age}</li>
//       )
//     })}
//     </ul>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// use hook state tarika 2
// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈





// const App = () => {
  
//   let [users, setusers] = React.useState([{name : "jimmy", age : 19},
//   {name : "vinod", age : 39},
// {name : "ram", age : 27},
// {name : "sumit", age : 18}
// ])
  
//   return(
//     <>
//     <h1>user list</h1>
//     <ul>
//       {users.map((curl, index) => {
//   return(

//     <li key={index}>
//       {curl.name} - {curl.age}</li>
//       )
//     })}
//     </ul>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// ===================
// #30 video course?
// ===================


// DERIVED STATE IN REACT
// =======================


// const App = () => {
  
//   let [users, setusers] = React.useState([{name : "jimmy", age : 19},
//   {name : "vinod", age : 39},
// {name : "ram", age : 27},
// {name : "sumit", age : 18}
// ]);

// let user = users.length;

// let userCount = (users.reduce((acum, curl) => acum + curl.age, 0)) / user
  
  
//   return(
//     <>
//     <h1>user list</h1>
//     <ul>
//       {users.map((curl, index) => {
//   return(

//     <li key={index}>
//       {curl.name} - {curl.age}</li>
//       )
      
//     })}
//     <li>{userCount}</li>
//     </ul>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)




// ===================
// #31 video course?
// ===================

// LIFTING THE STATE UP REACT 
// ==========================

// const Fction = () => {
//   let [input, setInput] = React.useState("");
//   return(
//     <>
//     <App input={input} setInput={setInput}/>
//     <Jimmy input={input}/>
//   </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Fction/>)


// const App = ({input, setInput}) => {
  
//   return(
//     <>
//     <input type="text" 
//     value={input}
//     onChange={(e)=> setInput(e.target.value)}
//     ></input>
//     </>
//   )
// }



// const Jimmy = ({input}) => {
//   return(
//     <>
//     <p>hello jimmy kaise ho:{input}</p>
//     </>
//   )
// }




// ===================
// #32 video course?
// ===================

// REACT TOGGLE SWITCH  APP
// ========================


// const App = () => {
//   let [isOn, setIsOn] = React.useState(true);
  
// const Switch = () => {
//   setIsOn(!isOn)
// }

// const Ternery = isOn ? "on" : "off";

// const Prnt = !isOn ? "purple" : "green"

//   return(
//     <>
// <div className="parent" 
// onClick={Switch} style={{backgroundColor : Prnt}}>
  
// <div className={`switche ${Ternery}`}>
  
// <span>{Ternery}</span>
//     </div>
//     </div>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



// ===================
// #33 video course?
// ===================

// REACT BEST ICON LIBARARY
// ==========================

// const App = () => {
//   return (
//     <div>
//       <i className="fa-solid fa-house"></i>
//       <i className="fa-solid fa-user"></i>
//       <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
//     </div>
//   );
// };


// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// ===================
// #34 video course?
// ===================





