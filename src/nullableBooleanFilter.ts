import { inputObjectType } from '@nexus/schema'

export const NullableBooleanFilter = inputObjectType({
  name: 'NullableBooleanFilter',
  definition(t) {
    t.boolean('equals')
    t.boolean('not')
  },
})
