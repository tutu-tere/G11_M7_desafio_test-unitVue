import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
