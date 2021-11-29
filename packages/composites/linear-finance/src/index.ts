import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute } from './adapter'
import { makeConfig } from './config'

const NAME = 'LINEAR_FINANCE'

const { server } = expose(NAME, makeExecute())
export { NAME, makeExecute, makeConfig, server }
