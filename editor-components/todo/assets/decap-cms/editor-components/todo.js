export default {
  id: 'todo',
  label: 'Todo',
  fields: [
    {
      name: 'done',
      label: 'Done',
      widget: 'boolean'
    },
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    }
  ],
  pattern: /^-\s*\[([\sx])\]\s*(.+?)$/ms,
  fromBlock: function (match) {
    return {
      done: match[1] === 'x',
      title: match[2]
    }
  },
  toBlock: function (data) {
    return `- [${data.done ? 'x' : ' '}] ${data.title}`
  },
  toPreview: function (data) {
    return `<p><input ${data.done ? ' checked' : ''} disabled type="checkbox">${data.title}</p>`
  }
}
