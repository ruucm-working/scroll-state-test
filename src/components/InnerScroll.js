import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import useUserInput from '../store/hooks/useUserInput'
import useTheme from '../store/hooks/useTheme'

const Wrap = styled.div`
  background: pink;
  height: 300px;
  overflow-y: scroll;
`
const Content = styled.div``

const Comp = () => {
  const [userInput, setUserInput] = useUserInput()
  return (
    <Wrap
      onScroll={e => {
        const scrollAmount = e.target.scrollTop
        // console.log('e.scrollTop', e.target.scrollTop)
        // console.log('scrollAmount', scrollAmount)
        setUserInput({
          scrollAmount,
        })
      }}
    >
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        hendrerit, nisi ac convallis laoreet, velit turpis lobortis mi, quis
        aliquet mauris nibh ut justo. Vivamus facilisis nisi vitae gravida
        consectetur. Nulla molestie arcu vel interdum suscipit. Aliquam
        volutpat, nisl et consequat blandit, leo elit rutrum risus, et euismod
        ligula turpis nec magna. Maecenas id risus velit. Donec porta urna nec
        enim auctor malesuada. Nulla eros ligula, commodo sit amet sem ut,
        sodales imperdiet tortor. Praesent non suscipit purus, at convallis ex.
        Nulla sed convallis massa, sed euismod justo. Cras venenatis leo et dui
        bibendum, id pulvinar turpis sodales. Praesent quis varius sem, ut
        malesuada tellus. Etiam mi erat, sollicitudin nec augue eu, auctor
        pellentesque lectus. Maecenas semper rhoncus sem, aliquet imperdiet
        tellus mollis vel. Mauris tristique eros magna, in mattis ligula
        facilisis ac. In in ultrices dui. Aliquam faucibus quis eros sed
        pharetra. Nullam nec urna dui. In sit amet fringilla est, nec venenatis
        dui. Quisque lectus dui, pharetra at dolor id, cursus interdum mauris.
        Proin eleifend ligula ac finibus tempor. Quisque pharetra risus lectus,
        a elementum quam consequat sit amet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec suscipit augue diam, at scelerisque
        metus placerat eu. Proin faucibus lectus vulputate accumsan ultrices.
        Nulla commodo eget nunc sed volutpat. Phasellus at pharetra felis. Nam
        malesuada vel neque quis tincidunt. Mauris commodo ullamcorper nisi.
        Quisque viverra mauris at urna efficitur ornare. Ut porta enim in velit
        dapibus, at viverra eros pellentesque. Nunc mi diam, placerat vel libero
        non, egestas eleifend ante. Ut tristique libero et sem scelerisque, eget
        aliquam ligula vestibulum. Cras id arcu ac velit facilisis consectetur
        nec ut nisi. Proin felis purus, lacinia in tincidunt eu, consequat eu
        leo. Sed sodales, orci eget placerat finibus, lectus lectus tincidunt
        nibh, vel venenatis diam quam sit amet est. Quisque ut vulputate lectus.
        Integer facilisis nisl nec mi lobortis volutpat. Curabitur consequat
        eleifend ipsum, vel faucibus enim malesuada at. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed nec rutrum mi. Cras tempor nunc a dignissim porta. Ut quis dui eu
        nulla maximus tincidunt. Donec aliquet sit amet felis in vestibulum.
        Vestibulum varius elit id mauris cursus, et tincidunt est congue.
        Curabitur tincidunt mauris metus, at convallis odio rhoncus in. Donec
        est eros, fringilla vel eros sit amet, eleifend imperdiet enim.
        Curabitur lacus nisl, pharetra non massa eleifend, auctor sagittis
        augue. Fusce eget odio rutrum, consequat lorem in, tempus sapien.
        Curabitur pharetra mauris eget gravida tristique. Aliquam maximus lorem
        eu tellus consectetur luctus quis fringilla est. Etiam ac libero eu
        sapien auctor feugiat. Suspendisse vestibulum sollicitudin neque in
        faucibus. Mauris pulvinar sodales mi non hendrerit. Nullam porta
        porttitor lacus, id facilisis libero tempus non. Suspendisse elit neque,
        ultrices nec metus eu, dapibus aliquam sapien. Nam non ante non risus
        pretium semper sed eu tortor. Duis id ligula in ex porttitor
        sollicitudin. Vestibulum consectetur turpis sed consectetur mattis.
        Aliquam feugiat placerat ante vitae ultricies.
      </Content>
    </Wrap>
  )
}

Comp.defaultProps = {}

export default Comp
