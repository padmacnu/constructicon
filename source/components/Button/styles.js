export default (props = {}, traits = {}) => {
  const {
    colors,
    effects,
    radiuses,
    rhythm,
    scale,
    shadows,
    treatments
  } = traits

  return {
    root: {
      display: 'inline-block',
      cursor: 'pointer',
      textDecoration: 'none',
      padding: `${rhythm(props.padding.y, 'em')} ${rhythm(props.padding.x, 'em')}`,
      backgroundColor: colors[props.background],
      color: colors[props.foreground],
      border: `${props.borderWidth}px solid ${colors[props.borderColor]}`,
      borderRadius: rhythm(radiuses[props.radius]),
      boxShadow: shadows[props.shadow],
      fontSize: scale(props.size),
      ...treatments[props.font],
      ...effects[props.effect],
      ...props.styles
    }
  }
}