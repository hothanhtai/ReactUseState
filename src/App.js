import { useState } from 'react';
import './App.css';



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

const courses = [
  {
    id:1,
    name: "HTML,CSS"
  },
  {
    id:2,
    name: "Javascript"
  },
  {
    id:3,
    name: "ReactJS"
  }
]
function App() {
  const [checked, setChecked] = useState([])


  console.log(checked)

  const handleCheck = (id) => {
    setChecked(prev =>{
      const isChecked =  checked.includes(id)

      if(isChecked){
        return checked.filter(item => item !== id)
      }else{
        return [...prev,id]
      }
    })
  }
  const handelSubmit = () =>{
    console.log({ids:checked})

    }


  return (
    <div className="App">
      {
        courses.map(course => (
          <div key={course.id}>
            <input 
              checked={ checked.includes(course.id)}
              type="checkbox"
              onChange={() => handleCheck(course.id)}
              />
              {course.name}
          </div>
        ))}
      <button onClick={handelSubmit}>Register</button>
    </div>
  )
}

export default App;