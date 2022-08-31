import React, { useState, useEffect } from "react"
import * as C from "./styles/index"
import { Input } from "./components/input"
import { Button } from "./components/button"
import { Score } from "./components/score"
import { ActionGame } from "./components/actions_game"
import { Modal } from "./components/modal"

const messages = {
  rules: {
    title: "Regras",
    message:
      "Jo ken pô, é um jogo em que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), papel (mão espalmada) e tesoura (dois dedos a frente). O jogo é similar ao 'par ou ímpar', porém com uma variável a mais. E funciona assim: Cada jogador escolhe uma opção. A tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!",
  },
}

const user = {
  title: "Usuário",
  message: "Preencha um nome para o jogador",
}

const actions = [
  {
    value: 1,
    label: "👊🏽",
    description: "rock",
  },
  {
    value: 2,
    label: "🖐🏽",
    description: "paper",
  },
  {
    value: 3,
    label: "✌🏽",
    description: "scissors",
  },
]

const valueTypeEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

const score_to_win = 10

function App() {
  const [titleModal, setTitleModal] = useState("")
  const [messageModal, setMessageModal] = useState("")
  const [modal, setModal] = useState(false)
  const [userName, setUserName] = useState("JOGADOR")
  const [playGame, setPlayGame] = useState(false)
  const [userAction, setUserAction] = useState("❓")
  const [computerAction, setComputerAction] = useState("❓")
  const [textGame, setTextGame] = useState("Iniciar jogo!")
  const [scorePlayerValue, setScorePlayerValue] = useState(0)
  const [scoreComputerValue, setScoreComputerValue] = useState(0)

  const messageRules = () => {
    setTitleModal(messages.rules.title)
    setMessageModal(messages.rules.message)
    setModal(true)
  }

  const handleUserName = (value) => {
    if (!value) return setUserName("JOGADOR")

    setUserName(value)
  }

  const randomActioComputer = () => {
    const number = Math.floor(Math.random() * actions.length)
    return actions[number]
  }

  const handleClick = (value) => {
    setUserAction(value.label)
    const actionComputer = randomActioComputer()
    setComputerAction(actionComputer.label)

    checkWinner(value.value, actionComputer.value)
  }

  const checkWinner = (playerValue, computerValue) => {
    const playerRockWin =
      playerValue === valueTypeEnum.ROCK &&
      computerValue === valueTypeEnum.SCISSORS
    const playerPaperWin =
      playerValue === valueTypeEnum.PAPER &&
      computerValue === valueTypeEnum.ROCK
    const playerScissorsWin =
      playerValue === valueTypeEnum.SCISSORS &&
      computerValue === valueTypeEnum.PAPER
    const playerWin = playerScissorsWin || playerPaperWin || playerRockWin
    const drawerResult = playerValue === computerValue

    if (drawerResult) return setTextGame("Empate jogue novamente!")
    if (playerWin) {
      setTextGame("Vítoria jogue novamente!")
      setScorePlayerValue((state) => state + 1)

      return
    }

    setTextGame("Derrota jogue novamente!")
    setScoreComputerValue((state) => state + 1)
  }

  const startGame = () => {
    if (userName === "JOGADOR") {
      setTitleModal(user.title)
      setMessageModal(user.message)
      setModal(!modal)
      return
    }

    if (playGame) return resetValues()

    setPlayGame(!playGame)
  }


  const resetValues = () => {
    setUserAction("❓")
    setComputerAction("❓")
    setTextGame("Iniciar jogo!")
    setScorePlayerValue(0)
    setScoreComputerValue(0)
    setPlayGame(false)
  }

  useEffect(() => {
    const playerWin = scorePlayerValue === score_to_win
    const computerWin = scoreComputerValue === score_to_win

    if (playerWin) {
      setTitleModal("Parabéns")
      setMessageModal("Você venceu, quero ver ganhar de novo")
      setModal(true)
    }
    if (computerWin) {
      setTitleModal("Que pena")
      setMessageModal(
        "Não foi dessa vez, mais tente novamente aposto que você consegue"
      )
      setModal(true)
    }
    if (computerWin || playerWin) {
      resetValues()
    }
  }, [scorePlayerValue, scoreComputerValue])

  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography fontWeight="400" size="32px" lineHeight="48px">
          JO KEN PÔ
        </C.Typography>
        <C.Flex direction='column' >
        <Input
          placeholder="Digite o nome do jogador"
          onChange={(value) => handleUserName(value)}
        />
        <Button onClick={() => startGame()}>
          {playGame ? "Parar" : "Iniciar"}
        </Button>
        </C.Flex>
        <Score
          userName={userName}
          scorePlayer={scorePlayerValue}
          scoreComputer={scoreComputerValue}
        />
        <C.Spacer margin="8px" />
        <C.Flex justify="space-around">
          <C.Typography size="42px">{userAction}</C.Typography>
          <C.Typography size="42px">{computerAction}</C.Typography>
        </C.Flex>
        <C.Spacer margin="8px" />
        <C.Flex direction="column" gap="10px">
          <C.Typography>{textGame}</C.Typography>
          <C.Rules onClick={() => messageRules()}>Regras</C.Rules>
        </C.Flex>
        <ActionGame
          disabled={!playGame}
          action={actions}
          onClick={(value) => handleClick(value) && checkDisabled()}
        />
        <Modal
          open={modal}
          titleModal={titleModal}
          message={messageModal}
          handleOpenModal={() => setModal(null)}
        />
      </C.Flex>
    </C.Container>
  )
}

export default App
