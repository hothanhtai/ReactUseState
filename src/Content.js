import { useEffect, useRef, useState, memo } from "react";

// 1. CallBack luôn được gọi sau khi component mouted (cả 3 trường hợp của useEffect)
// 2. Cleanup function luôn được gọi trước khi component unmounted


//1. useEffec(callBack)
// ==> gọi callBack mỗi khi component re-render && gọi callBack sau khi component thêm element vào DOM
// function Content() {
//     const [title,setTitle] = useState('')


//     useEffect(() => {
//         document.title= title

//     })


//     return(
//        <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//        </div>

//     )
// }

// export default Content;


// 2.useEffect(callBack,[]) 
// ==> gọi lại callBack 1 lần sau khi component mouted

// function Content() {
//     const [title,setTitle] = useState('')
//     const [posts,setPost] = useState([])


//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                setPost(posts)
//     })

//     },[])


//     return(
//        <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {
//                     posts.map(post => (
//                         <li key={post.id}>{post.title}</li>

//                     ))
//                 }
//             </ul>
//        </div>

//     )
// }

// export default Content;




// 3. useEffect(callBack,[deps])
// ==> callBack sẽ được gọi lại khi deps thay đổi

// const tabs = ['posts','comments','albums']
// const lessons = [
//     {
//         id:1,
//         name:'Chanel 1'
//     },
//     {
//         id:2,
//         name:'Chanel 2'
//     },
//     {
//         id:3,
//         name:'Chanel 3'
//     }
// ]
function Content({onIncrease}) {
    
    // const [title,setTitle] = useState('')
    // const [posts,setPost] = useState([])
    // const [type, setType] = useState('posts')
    // const [showGoToTop, setShowGoToTop] = useState(false)
    // const [width, setWidth] = useState(window.innerWidth)
    // const [countdown, setCountdown] = useState(180)
    


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${
    //         type
    //     }`)
    //         .then(res => res.json())
    //         .then(posts => {
    //            setPost(posts)
    // })

    // },[type])

    // useEffect(() => {
    //     const handleSroll = () => {
    //         if(window.scrollY >= 200){
    //             setShowGoToTop(true)

    //         } else {
    //             setShowGoToTop(false)

    //         }
    //         //setShowGoToTop(window.scrollY >= 200)

    //     }

    //     window.addEventListener('scroll',handleSroll)
    //     console.log("add")
    //     //cleanup function
    //     return () => {
    //         window.removeEventListener('scroll',handleSroll)
    //         console.log('remove')
    //     }
    // },[])

    // useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth)

    //     window.addEventListener('resize', handleResize)
    // }, [])

    // useEffect(() => {

    //    const timerId = setInterval(() => {
    //         setCountdown(prevState => prevState-1)} ,1000)
    //     //cleanup function
    //     return () =>{
    //         clearInterval(timerId)
    //     }
    // }, [])
    // const [avatar, setAvatar] = useState()

    // useEffect(() => {
    //     //cleanup function
    //     return () => { avatar && URL.revokeObjectURL(avatar.preview)}
    // },[avatar])
    // const handleReviewAvatar = (e) => {
    //         const file = e.target.files[0]
    //        file.preview = URL.createObjectURL(file)

    //        setAvatar(file)
    // }
    // const [lessonId, setLessonId] = useState(1)

    // useEffect(() => {
    //     const handleCommnent = ({detail}) => {
    //         console.log(detail)
    //     }
    //     window.addEventListener(`lesson-${lessonId}`,handleCommnent)
    //     return () => {
    //         window.removeEventListener(`lesson-${lessonId}`,handleCommnent)
    //     }
    // },[lessonId])



    //==============USE useRef===========================
    // useRef luôn trả về giá trị là Object có key là current

    // const [count, setCount] = useState(60)

    // const timerID = useRef()
    // const prevCount = useRef()
    // const h1Ref = useRef()
    // const handleStart = () => {
    //        timerID.current = setInterval(() => {
    //             setCount(prevCount => prevCount - 1)
    //         }, 1000);
    //         console.log('Start ->>',timerID.current)
         
    // }
    // useEffect(() => {
    //     console.log(h1Ref.current)
    // },[])

    // useEffect(() => {
    //     prevCount.current = count
    // },[count])

    // useEffect(() => {
    //     timerID.current = setInterval(() => {
    //         setCount(prevCount => prevCount - 1)
    //     }, 1000);
    //     console.log('Start ->>',timerID.current)
    //     return () => {
    //         clearInterval(timerID.current)
    //     }
    // },[])

    // const handleStop = () => {
    //    clearInterval(timerID.current)

    //    console.log('Stop ->>',timerID.current)

    // }

    // console.log(count, prevCount.current)

    console.log('Re-render')
   

    return (

  
       <div>
            {/* {tabs.map(tab => (
                    <button key = {tab}
                            style={ type === tab ? {
                                    color: '#fff',
                                    backgroundColor: '#333'
                                
                                } : {}}
                            onClick = {() => setType(tab)}
                     >
                        {tab}
                    </button>
                ))
            }
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>

                    ))
                }
            </ul>
            {showGoToTop && (
                <button 
                    style={{
                        position:"fixed",
                        right:20,
                        bottom:20
                }}
                >GO TO TOP</button>
            )}
            <div>
                <h1>{width}</h1>
            </div>
            <div>
                <h1>{countdown}</h1>
            </div> */
            // <div>
            //     <input 
            //         type= "file"
            //         onChange = {handleReviewAvatar}
            //     />
            //     {avatar && (
            //         <img src={avatar.preview} alt="" width="30%"/>
            //     )}
            // </div>
            
            // <div>
            //     <ul>
            //         {lessons.map(lesson => (
            //             <li 
            //                 key={lesson.id}
            //                 style={
            //                     { 
            //                         color: lessonId === lesson.id ? "red" : "#333"
            //                     }
            //                 }
            //                 onClick={() => setLessonId(lesson.id)}
            //             >
            //                 {lesson.name}
            //             </li>
            //         ))}
            //     </ul>
            // </div>
            
                // <div>
                //     <h1 ref={h1Ref}>{count}</h1>
                //     <button
                //         onClick={() => setCount(prevCount => prevCount -1)}
                //     >Start</button>
                //     <button onClick={handleStop}>Stop</button>
                // </div>
              
               <>
               <h2>Hello world</h2>
                <button onClick={onIncrease}>Click Me!</button>
                </>
            }
       </div>
       

    )
}

export default memo(Content);