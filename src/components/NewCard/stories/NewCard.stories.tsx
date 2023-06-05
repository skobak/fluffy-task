import type { Meta, StoryObj } from '@storybook/react'
import NewCard from '../NewCard'

const meta = {
  title: 'App/NewCard',
  component: NewCard,
  tags: ['autodocs']
} satisfies Meta<typeof NewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
