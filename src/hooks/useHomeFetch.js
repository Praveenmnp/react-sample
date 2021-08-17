import { useState, useEffect, useRef } from "react";

//API
import API from '../API';

const initialState={
    page:0,
    results:[],
    totalpages:0,
    totalresults:0
}
export const useHomeFetch = () => {
    const [SearchTerm,setSearchTerm]=useState('')
    const [state,setState]= useState(initialState);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [isLoadingMore,SetIsLoadingMore] = useState(false);

    const fetchMovies = async (page,SearchTerm='')=> {
        try{
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(SearchTerm,page);
            setState(prev=>({
                ...movies,
                results:
                    page>1? [...prev.results, ...movies.results]:[...movies.results]

            }));
        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    };
    //SearchTerm
    useEffect(()=>{
        setState(initialState)
        fetchMovies(1,SearchTerm);
    },[SearchTerm])
    //Loading
    useEffect(()=>{
        if(!isLoadingMore) return;
        fetchMovies(state.page+1,SearchTerm);
        SetIsLoadingMore(false);
    },[isLoadingMore,state.page,SearchTerm])

    return {state,loading,error,SearchTerm,setSearchTerm,SetIsLoadingMore}
}