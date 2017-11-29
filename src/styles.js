const styles = {
  duration: 300,
  defaultStyle : {
    transition: `all 300ms ease-in-out`,
    opacity: 0,
    transform: `translateX(-30px)`,
  },

  transitionStyles : {
    entering: { opacity: 0 },
    entered:  { opacity: 1, transform: `translateX(0px)`},
  }
}

export default styles;
