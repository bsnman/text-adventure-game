import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { render } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import InventoryPanel from '../InventoryPanel.vue'
import { useInventoryStore } from '../../store/inventory'

function renderPanel() {
  const pinia = createTestingPinia({ stubActions: false, createSpy: vi.fn })
  const utils = render(InventoryPanel, { global: { plugins: [pinia] } })
  return { ...utils, pinia }
}

describe('InventoryPanel', () => {
  it('renders items from the store', async () => {
    const { getByText } = renderPanel()
    const store = useInventoryStore()
    store.add({ id: 'torch', name: 'Torch', description: '' })
    await nextTick()
    getByText('Torch')
  })

  it('matches snapshot', () => {
    const { container } = renderPanel()
    expect(container).toMatchSnapshot()
  })
})
