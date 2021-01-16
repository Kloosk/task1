import React,{useState} from 'react';
import './Autocomplete.css'

const searchNameByIncludeValue = (data,inputValue) => {
    /*
    *  12 days ago I wrote a identical function in my "NoTes" project.
    *  I think this solution is beautiful, but this function looks in whole expressions.
    *  https://github.com/Kloosk/NoTesApp/blob/master/src/components/search/SearchEngine.js
    * */
    return data.filter(el => el.toLowerCase().includes(inputValue.toLowerCase()));
};
const searchNameByLetter = (data,inputValue) => {
    /* My implementation from scratch
    *  This function works in the same way as the example function, it search for letter by letter.
    *  In this small example, more optimizations are not needed,
    *  but when we have a lot of data, we can store data in an additional variable,
    *  we will use more RAM but it will be faster.
    * */
    const tempArr = [];
    const toLower = inputValue.toLowerCase();
    for(let i=0; i<data.length; i++){
        const el = data[i].toLowerCase();//current element in loop
        if(toLower.length < el.length){//length of element has to be greater than input length
            let add = true;
            for(let j=0; j<toLower.length; j++){
                if(el[j] !== toLower[j]){//if letter !== dont add to array
                    add = false;
                    break;
                }
            }
            if(add){//ff true, add to the array
                tempArr.push(data[i]);
            }
        }
    }
    return tempArr;
};

const Autocomplete = ({names}) => {
    const [namesArr,setNamesArr] = useState([]);
    const [inputVal,setInputValue] = useState("");

    const handleClick = arg =>{
        setInputValue(arg);
        setNamesArr([]);
    };
    const handleChange = e => {
        setInputValue(e.target.value);
        //INCLUDE
        //e.target.value === "" ? setNamesArr([]) : setNamesArr(searchNameByIncludeValue(names,e.target.value));
        //LETTER BY LETTER
        e.target.value === "" ? setNamesArr([]) : setNamesArr(searchNameByLetter(names,e.target.value));
    };
    return (
        <div className="container">
            <input className="input" type="text" placeholder="Your name" onChange={handleChange} value={inputVal}/>

            {namesArr.length > 0 && (
                <div>
                    {namesArr.map((el,i) => <button className="btn" key={i} onClick={() => handleClick(el)}>{el}</button>)}
                </div>
            )}
        </div>
    );
};

export default Autocomplete;