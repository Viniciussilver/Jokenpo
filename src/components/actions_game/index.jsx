import { Typography, Flex } from "../../styles"
import { Action } from './style'

export const ActionGame =({action, disabled, onClick})=>{

    return(
        <Flex>
            {action.map((actions) =>(
                <Action
                 key={actions.value}
                 disabled={disabled}
                 onClick={() => onClick(actions)}
                 ><Typography size="33px">{actions.label}</Typography></Action>
            ))
            }
        </Flex>

    )
}