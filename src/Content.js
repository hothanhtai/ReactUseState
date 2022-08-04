import { useEffect, useState } from "react";

// CallBack luôn được gọi sau khi component mouted (cả 3 trường hợp của useEffect)


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

const tabs = ['posts','comments','albums']

function Content() {
    const [title,setTitle] = useState('')
    const [posts,setPost] = useState([])
    const [type, setType] = useState('posts')


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${
            type
        }`)
            .then(res => res.json())
            .then(posts => {
               setPost(posts)
    })

    },[type])


    return(

  
       <div>
            {tabs.map(tab => (
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
       </div>

    )
}

export default Content;