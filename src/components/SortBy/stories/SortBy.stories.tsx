import type { Meta, StoryObj } from '@storybook/react'
import SortBy from '../SortBy'

const meta = {
  title: 'App/SortBy',
  component: SortBy,
  tags: ['autodocs']
} satisfies Meta<typeof SortBy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
