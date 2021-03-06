import React from 'react'

class StaticContainer extends React.Component {

  shouldComponentUpdate(nextProps: Object): boolean {
    return !!nextProps.shouldUpdate
  }

  render(): ?ReactElement {
    var child = this.props.children
    if (child === null || child === false) {
      return null
    }
    return React.Children.only(child)
  }

}

export default StaticContainer