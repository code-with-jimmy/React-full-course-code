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
// #4 vide course?
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
// #5 vide course?
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
// #6 vide course?
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
// #7 vide course?
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
// #8 vide course?
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
// #9 vide course?
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
// #10 vide course?
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
// #11 vide course?
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
// #12 vide course?
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
// #13 vide course?
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
// #14 vide course?
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
// #15 vide course?
// ================



































