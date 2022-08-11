import { useRef, useReducer } from "react";
import reducer,{ initState} from "./reducer";
import {addJob,setJob,deleteJob} from './actions'
import logger from "./logger";
//===================TO DO USE useReducer()========================

  
  
  
  
  function App(){
    // const [show, setShow] = useState(false)
    // const [count, setCount] = useState(0)
  
  //   const handleIncrease = useCallback(() => {
  //     setCount(prevCount => prevCount + 1)
  // },[])
    // const [name, setName] = useState('')
    // const [price, setPrice] =useState('')
    // const [products, setProducts] = useState([])
  
    // const nameRef = useRef()
  
    // const handleSubmit = () => {
    //   setProducts([...products,{
    //     name,
    //     price : +price
     
    //   }])
    //   setName('')
    //   setPrice('')
  
    //   nameRef.current.focus()
    // }
    // const total = useMemo(() => {  //useMemo : Dùng useMemo để tránh Re-render lại một logic không cần thiết
  
    //  const result =  products.reduce((result, prod) => result+ prod.price , 0)
    //   return result
    // },[products])
  
  //===================useReducer===============================
  
  // const [count, dispatch] = useReducer(reducer, initState)\
  
  
  //====================TO DO =========================
  const jobRef = useRef()
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state
  
  
  
  const handleSubmit =() => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    jobRef.current.focus()
  }
  
  
  
      return (
        // <div className='App'>
        //   <button onClick={() => setShow(!show)}>Show</button>
        //    {show&& <Content/>}
        // </div>
        <div style={{padding: '0 20px'}}>
          { /* <Content onIncrease={handleIncrease}/>
          <h1>{count}</h1> */ }
           {/* <input
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
          </ul> */}
          {/* <h1>{count}</h1>
          <button
            onClick={() => dispatch(DOWN_ACTION)}
          >DOWN</button>
          <button
            onClick={() => dispatch(UP_ACTION)}
          >UP</button> */}
  
          <h1>TO DO</h1>
          <input
            ref={jobRef}
            value={job}
            placeholder='Enter todo'
            onChange={e => {
              dispatch(setJob(e.target.value))
  
            }}
           />
           <button onClick={handleSubmit}>Add</button>
           <ul>
              {jobs.map((job,index) => (
                <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
              ))}
           </ul>
        
        
  
        </div>
      )
  }
  
  export default App;