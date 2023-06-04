import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../Card'

const meta = {
  title: 'App/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
      default: 'Card'
    },
    description: {
      name: 'description',
      type: { name: 'string', required: false }
    },
    imgUrl: {
      name: 'imgUrl',
      type: { name: 'string', required: false }
    },
    imgAlt: {
      name: 'imgAlt',
      type: { name: 'string', required: false }
    }
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const LongName: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
  }
}

export const ShortName: Story = {
  args: {
    title: 'Cat',
    description: 'This is a cat'
  }
}

export const NoDescription: Story = {
  args: {
    title: 'Cat'
  }
}

export const WithImage: Story = {
  args: {
    title: 'Cat',
    description: 'This is a cat',
    imgUrl: 'https://skob.io/ava.jpeg',
    imgAlt: 'Avatar'
  }
}
