import React, { useState, useEffect } from 'react';
import Link from './Link';

import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../../redux/ducks';

/* eslint-disable react-hooks/exhaustive-deps */
const LinkShorter = () => {

    const dispatchData = useDispatch();
    const reDomain = /\w+\.[a-z]+/i; 
    const btnRef= React.createRef();
    const alert= document.querySelector('.shorten-form .shorten-alert');
    const input = document.querySelector('.shorten-form input');


    const [data, setData] = useState({
        link: '',
    })

    const [linkArray, setLinkArray] = useState([])

    const links = useSelector(store =>  store.data.array.result? store.data.array.result : "");

    //Load data from Local storage
    useEffect(()=>{
        let dataLocalStorage = localStorage.getItem('data');
        if(dataLocalStorage !== null){
            setLinkArray(JSON.parse(dataLocalStorage));
        }else{
            //nothing lol
            
        }
    },[]);
    
    //get data from redux store
    useEffect(()=>{
        setLinkArray(linkArray => [...linkArray, links])
        
        btnRef.current.disabled = false;
        btnRef.current.innerHTML = "Shorten It!";
    },[links]);

    //Save data in Local storage
    useEffect(() => {
        let jsonData = JSON.stringify(linkArray);
        console.log(linkArray);
        if(jsonData !== ''){
            localStorage.setItem('data', jsonData);

        }else{
            //nothing lol
        }
    },[linkArray])

   

    const handleInputChange = (e) => {
        setData({
            link: e.target.value
        })
    }

    const shortLink = (e) =>{
        e.preventDefault();
          
        if(reDomain.test(data.link)){
            alert.classList.remove('display');
            input.classList.remove('error');
            btnRef.current.innerHTML = '<div class="loading"></div>';
            btnRef.current.disabled = true
            dispatchData(getDataAction(data.link));
        }else{
            input.classList.add('error');
            alert.classList.add('display');
        }      
    }
    

    return (
        <section className="shorter-container">
            <form onSubmit={shortLink} className="shorten-form">
                <div className="short">
                    <input type="text" onChange={handleInputChange} placeholder="Shorten a link here..."></input>

                    <button ref={btnRef} type="submit">Shorten It!</button>
                </div>
                
                <div className="shorten-alert">
                    <p><small>Put a valid URL. Ej: "example.com", "example.com/route"</small></p>
                </div>
            </form>

            {linkArray.filter(link => link !== "")
            .map(link =>(              
                <Link
                    key = {link.code}
                    data = {link}
                />
            ))}
                       
        </section>
    )
}

export default LinkShorter
