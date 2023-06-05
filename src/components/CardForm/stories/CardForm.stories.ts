import type { Meta, StoryObj } from '@storybook/react'
import CardForm from '../CardForm'

const meta = {
  title: 'App/CardForm',
  component: CardForm,
  tags: ['autodocs']
} satisfies Meta<typeof CardForm>

export default meta
type Story = StoryObj<typeof meta>

export const EmptyForm: Story = {
  args: {
    cat: null
  }
}

export const FilledForm: Story = {
  args: {
    cat: { id: '1', name: 'Cat', bio: 'This is a cat', gender: 'female' }
  }
}

export const FilledFormLongNames: Story = {
  args: {
    cat: {
      id: '1',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      gender: 'female'
    }
  }
}
