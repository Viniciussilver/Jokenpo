import {StyledInput} from './style'

export const Input = ({placeholder, onChange})=> {

    return (
        <StyledInput placeholder={placeholder}
        onChange={(e)=> onChange(e.target.value)}/>
    )
}