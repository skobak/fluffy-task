import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../Card'

const meta = {
  title: 'App/Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const LongName: Story = {
  args: {
    cat: {
      id: '1',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
    }
  }
}

export const ShortName: Story = {
  args: {
    cat: { id: '1', name: 'Cat', bio: 'This is a cat' }
  }
}

export const NoDescription: Story = {
  args: {
    cat: { id: '1', name: 'Cat' }
  }
}

export const WithImage: Story = {
  args: {
    cat: {
      id: '2',
      name: 'Cat',
      bio: 'This is a cat',
      photo: 'https://skob.io/ava.jpeg'
    }
  }
}
