import React,{useState, useRef,useEffect} from 'react'

//styles
import { Wrapper,Content } from './SearchBar.styles'

//Image
import Searchicon from '../../images/search-icon.png'

const SearchBar = ({setSearchTerm}) => {
    const [state,setState]=useState('')
    const initial = useRef(true)

    useEffect(()=>{
        if(initial.current){
            initial.current=false;
            return;
        }

        const timer = setTimeout(()=>{
            setSearchTerm(state)
        },500)
        return ()=> clearTimeout(timer);
    },[setSearchTerm,state])

    return (  
        <Wrapper>
            <Content>
                <img src={Searchicon} alt='search-icon'/>
                <input
                    type='text'
                    placeholder='Search Movies'
                    onChange={event=>setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
}
 
export default SearchBar;