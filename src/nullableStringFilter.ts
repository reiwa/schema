import { inputObjectType } from '@nexus/schema'

export const NullableStringFilter = inputObjectType({
  name: 'NullableStringFilter',
  definition(t) {
    t.string('equals')
    t.string('not')
    t.list.string('in')
    t.list.string('notIn')
    t.string('lt')
    t.string('lte')
    t.string('gt')
    t.string('gte')
    t.string('contains')
    t.string('startsWith')
    t.string('endsWith')
  },
})
