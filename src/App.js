import { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import Content from './Content';


//============TWO-WAY-BINDING in FORM===================
// function App() {

//   const [name ,setName] = useState('')
//   const [email ,setEmail] = useState('')

//   const handelSubmit = () =>{
//     console.log({
//       name,
//       email
//     })

//   }

//   return (
//     <div className="App">
//       <input 
//         value={name}
//         onChange = {e => setName(e.target.value)}

//       />
//       <input 
//         value={email}
//         onChange = {e => setEmail(e.target.value)}

//       />
//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   );
// }




//TWO-WAY-BINDING in RADIO==========================

// const courses = [
//   {
//     id:1,
//     name: "HTML,CSS"
//   },
//   {
//     id:2,
//     name: "Javascript"
//   },
//   {
//     id:3,
//     name: "ReactJS"
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState(1)


//   const handelSubmit = () =>{
//     console.log({id: checked})

//     }


//   return (
//     <div className="App">
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input 
//               checked={ checked === course.id}
//               type="radio"
//               onChange={() => setChecked(course.id)}
//               />
//               {course.name}
//           </div>
//         ))}
//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }

// export default App;


//========================TWO-WAY-BINDING in CHECKBOX==================

// const courses = [
//   {
//     id:1,
//     name: "HTML,CSS"
//   },
//   {
//     id:2,
//     name: "Javascript"
//   },
//   {
//     id:3,
//     name: "ReactJS"
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState([])


//   console.log(checked)

//   const handleCheck = (id) => {
//     setChecked(prev =>{
//       const isChecked =  checked.includes(id)

//       if(isChecked){
//         return checked.filter(item => item !== id)
//       }else{
//         return [...prev,id]
//       }
//     })
//   }
//   const handelSubmit = () =>{
//     console.log({ids:checked})

//     }


//   return (
//     <div className="App">
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input 
//               checked={ checked.includes(course.id)}
//               type="checkbox"
//               onChange={() => handleCheck(course.id)}
//               />
//               {course.name}
//           </div>
//         ))}
//       <button onClick={handelSubmit}>Register</button>
//     </div>
//   )
// }
// export default App;


//=======================TO DO LIST==========================
// function App(){

//   const [job,setJob] = useState('')
//   const [jobs,setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     if(storageJobs === null || storageJobs === undefined){
//       return []
//     }
//     return storageJobs
//   })
//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev,job]
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })


//     setJob('')
//   }

//   return (
//       <div className='App'>
//           <input value={job} onChange={e => setJob(e.target.value)}/>
//           <button onClick={handleSubmit}>Add</button>

//           <ul>
//             {
//               jobs.map((job,index) => (
//                     <li key={index}>{job}</li>
//                   ))
//             }
//           </ul>
//       </div>
//   )
// }





// export default App;


function App(){
  // const [show, setShow] = useState(false)
  // const [count, setCount] = useState(0)

//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount + 1)
// },[])
  const [name, setName] = useState('')
  const [price, setPrice] =useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products,{
      name,
      price : +price
   
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }
  const total = useMemo(() => {  //useMemo : Dùng useMemo để tránh Re-render lại một logic không cần thiết

   const result =  products.reduce((result, prod) => result+ prod.price , 0)
    return result
  },[products])
    return (
      // <div className='App'>
      //   <button onClick={() => setShow(!show)}>Show</button>
      //    {show&& <Content/>}
      // </div>
      <div>
        { /* <Content onIncrease={handleIncrease}/>
        <h1>{count}</h1> */ }
         <input
          ref={nameRef}
          value={name}
          placeholder= 'Enter Name...'
          onChange={e => setName(e.target.value)}
         />
         <br />
         <input
          value={price}
          placeholder= 'Enter Price...'
          onChange={e => setPrice(e.target.value)}
         />
         <button onClick={handleSubmit}>Add</button>

         <br/>

         Total:  {total}

        <ul>
          {
            products.map((product,index) => (
              <li key={index}>
                  {product.name} - {product.price}
              </li>
            ) )
          }
        </ul>
      </div>
    )
}

export default App;