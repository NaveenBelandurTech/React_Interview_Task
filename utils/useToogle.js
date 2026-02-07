import {useState} from 'react'

const usetoogle = () =>{
    const [clicked,setClicked] = useState()
    const [random,setRandom] = useState()

    const toogle = () =>{
        setClicked(!clicked)
    }


    const randomclicked = () =>{
        const ran = Math.round(Math.random()*10)
        setRandom(ran)
    }


    return [clicked,toogle,random,randomclicked]
}


export default usetoogle