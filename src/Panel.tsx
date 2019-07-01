import React from 'react'
import { animated, useTransition } from 'react-spring'

interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean
}

const Panel: React.FunctionComponent<IPanelProps> = ({ show, children }) => {
  const transitions = useTransition(show, null, {
    from: { transform: 'translate3d(0, 100%, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(0, 0, 0)' },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) => (
        item
        && <animated.div key={key} style={props} className='picker-wrapper'>
            {children}
           </animated.div>
      ))}
    </>
  )
}

export default Panel
