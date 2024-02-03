export const name = 'strings'

// eslint-disable-next-line no-undef
export const control = createClass({
  handleChange: function (e) {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e) => e.trimLeft()))
  },

  render: function () {
    const separator = this.props.field.get('separator', ', ')
    const value = this.props.value
    // eslint-disable-next-line no-undef
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange
    })
  }
})

// eslint-disable-next-line no-undef
export const preview = createClass({
  render: function () {
    // eslint-disable-next-line no-undef
    return h('ul', {},
      this.props.value.map(function (val, index) {
        // eslint-disable-next-line no-undef
        return h('li', { key: index }, val)
      })
    )
  }
})

export const schema = {
  properties: {
    separator: { type: 'string' }
  }
}
