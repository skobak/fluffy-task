import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'App/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: 'string',
    description: 'string',
    imgUrl: 'string',
    imgAlt: 'string'
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Card',
    description: 'This is a card'
  }
}
