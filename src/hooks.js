import axios from "axios";
import {v4}  from "uuid";
import React, {useState} from "react";

function useFlip () {
    const [state, setState] = useState(true);
    const toggle = () => {
        setState(state => !state)
    }
    return [state, toggle]
}

function useAxios (url) {
    const [state, setState] = useState([])
    const addData = async (urlEnder) => {
        if(typeof urlEnder == 'string'){
            url = `${url}${urlEnder}`
        }
        console.log(typeof urlEnder)
        console.log(urlEnder instanceof String)
        console.log(urlEnder)
        console.log(url)
        const response = await axios.get(url)
        const data = response.data
        setState(state => [...state, {...data, id:v4()}])
    }
    return [state,addData]
}

export {useFlip, useAxios}