import * as d from './d'
import ReactDom from 'react-dom'

/* eslint no-console: 0 */
async function exec () {
  const c = await import(/* webpackChunkName: "ccc" */ './c')
  console.log(c, d, ReactDom)
}

exec()
