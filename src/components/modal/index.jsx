import {Flex,Spacer, Typography} from '../../styles'
import {ModalStyled, CloseModal} from './style'


export const Modal = ({open, handleOpenModal, titleModal, message}) => {

    return (
        <ModalStyled open={open}>
            <Flex gap='8px' direction='column'>
                <Typography primary size='20px'>{titleModal}</Typography>
                <Spacer margin="8px" />
                <CloseModal onClick={() => handleOpenModal()}>X</CloseModal>
                <Typography primary >{message}</Typography>

            </Flex>
        </ModalStyled>
    )
}