import type { Meta, StoryObj } from '@storybook/react'
import SearchBar from '../SearchBar'

const meta = {
  title: 'App/SearchBar',
  component: SearchBar,
  tags: ['autodocs']
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
