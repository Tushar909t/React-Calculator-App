import React, {useState} from 'react';

const Calc = () => {
    const [InputVal, setInputVal]=useState("");

    return (
        <>
        <div className='container'>
            <h1>Calculator</h1>
            <div className='inputArea'>
                <input type="text" value={InputVal} onChange={(e)=> setInputVal(e.target.value)}/>
            </div>
            <div className='btn'>
                <button value="1" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>1</button>
                <button value="2" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>2</button>
                <button value="3" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>3</button>
                <button value="4" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>4</button>
                <button value="5" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>5</button>
                <button value="6" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>6</button>
                <button value="7" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>7</button>
                <button value="8" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>8</button>
                <button value="9" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>9</button>
                <button value="00" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>00</button>
                <button value="+" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>+</button>
                <button value="-" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>-</button>
                <button value="*" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>*</button>
                <button value="/" onClick={(e)=> {setInputVal(InputVal + e.target.value)}} name=''>/</button>
                <button value="AC" onClick={(e)=> {setInputVal(InputVal.slice(0,-1))}} name=''>AC</button>
                <button value="CE" onClick={(e)=> {setInputVal("")}} name=''>CE</button>
                <button value="=" onClick={(e)=> {
                    try{
                        setInputVal(eval(InputVal))
                    }catch{console.log("Error")}
                }} name=''>=</button>
            </div>
        </div>
        </>
    );
};

export default Calc;