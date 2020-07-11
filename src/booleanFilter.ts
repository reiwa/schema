import { inputObjectType } from '@nexus/schema'

export const BooleanFilter = inputObjectType({
  name: 'BooleanFilter',
  definition(t) {
    t.boolean('equals')
    t.boolean('not')
  },
})
