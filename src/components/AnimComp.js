import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { motion, transform } from 'framer-motion'
import useUserInput from '../store/hooks/useUserInput'
import useTheme from '../store/hooks/useTheme'

const Wrap = styled.div``
const AnimatedContent = styled(motion.div)`
  background: blue;
  width: 100px;
  height: 100px;
  border-radius: 12px;
`
const ScrollAmountText = styled.div`
  font-size: 40px;
`

const Comp = () => {
  const [userInput, setUserInput] = useUserInput()
  return (
    <Wrap>
      <AnimatedContent
        animate={{
          rotate: transform(userInput.scrollAmount, [0, 408], [0, 360]),
        }}
        transition={{
          duration: 3,
        }}
      />
      <ScrollAmountText>{userInput.scrollAmount}</ScrollAmountText>
    </Wrap>
  )
}

Comp.defaultProps = {}

export default Comp
