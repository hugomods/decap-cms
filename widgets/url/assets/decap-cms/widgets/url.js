export const name = 'url'

// eslint-disable-next-line no-undef
export const control = createClass({
  handleChange: function (e) {
    this.props.onChange(e.target.value)
  },

  render: function () {
    const value = this.props.value
    // eslint-disable-next-line no-undef
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'url',
      value: value ?? '',
      onChange: this.handleChange
    })
  },

  isValid: function () {
    try {
      const url = new URL(this.props.value)

      const protocols = this.props.field.get('protocols')
      if (protocols && !protocols.includes(url.protocol)) {
        return {
          error: {
            message: 'invalid protocol.'
          }
        }
      }

      return true
    } catch (e) {
      return {
        error: {
          message: 'invalid URL.'
        }
      }
    }
  }
})

export const schema = {
  properties: {
    protocols: { type: 'array' }
  }
}
