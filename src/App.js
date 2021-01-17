import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchNames} from "./redux";
import Autocomplete from "./components/autocomplete/Autocomplete";

const App = () => {
    const dispatch = useDispatch();
    const {loading,error,names} = useSelector(state => state.fetchNames);

    useEffect(() => {
        dispatch(fetchNames());
    },[]);
return (
    <>
        {loading && <p>Loading...</p>}
        {error ? <p>{error}</p> : <Autocomplete names={names}/>}
    </>
  );
};

export default App;
