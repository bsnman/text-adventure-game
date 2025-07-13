import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useInventoryStore } from '../../src/store/inventory'

describe('useInventoryStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds and removes items', () => {
    const store = useInventoryStore()
    store.add({ id: 'torch', name: 'Torch', description: '' })
    expect(store.items).toHaveLength(1)
    expect(store.has('torch')).toBe(true)
    store.remove('torch')
    expect(store.items).toHaveLength(0)
    expect(store.has('torch')).toBe(false)
  })
})
