import { Typography, Flex } from "../../styles"

export const Score = ({userName, scorePlayer, scoreComputer})=> {
    userName = userName.length > 12 ? `${userName.slice(0,8).toUpperCase()}...` : userName.toUpperCase()


    return (
        <Flex direction="column">
            <Typography size="28px" fontWeight="400" lineHeight="48px">PLACAR</Typography>
            <Flex justify="space-between">
                <Flex direction='column'gap="2px">
                    <Typography>{userName}</Typography>
                    <Typography >{scorePlayer}</Typography>
                </Flex>
                <Typography>X</Typography>
                <Flex  direction='column' gap="2px">
                    <Typography>COMPUTADOR</Typography>
                    <Typography>{scoreComputer}</Typography>
                </Flex>
            </Flex>
        </Flex>
    )
}