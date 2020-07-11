import { inputObjectType } from '@nexus/schema'

export const DateTimeFilter = inputObjectType({
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.field('not', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
  },
})
