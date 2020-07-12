import { inputObjectType } from '@nexus/schema'

export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.int('equals')
    t.int('not')
    t.list.int('in')
    t.list.int('notIn')
    t.int('lt')
    t.int('lte')
    t.int('gt')
    t.int('gte')
  },
})
