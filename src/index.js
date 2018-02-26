const React = require('react')

/* eslint no-console: 0 */
async function exec () {
  const a = await import(/* webpackChunkName: "aaa" */ './a')
  const b = await import(/* webpackChunkName: "bbb" */ './b')
  console.log(a, b, React)
}

exec()
