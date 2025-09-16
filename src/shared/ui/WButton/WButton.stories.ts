import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { WButton } from '.'

const meta: Meta<typeof WButton> = {
  title: 'Shared/Button',
  component: WButton,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['base', 'lg'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'white', 'light', 'link', 'link-white'],
    },
    class: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof WButton>

// Основной пример
export const Primary: Story = {
  args: {
    size: 'base',
    variant: 'primary',
    class: '',
    disabled: false,
    default: 'Click me',
  },
}

// Крупная кнопка
export const LargeWhite: Story = {
  args: {
    size: 'lg',
    variant: 'white',
    default: 'Submit',
  },
}

// Ссылка
export const LinkButton: Story = {
  args: {
    variant: 'link',
    default: 'Go to page',
  },
}

// Заблокированная
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    default: 'Disabled',
  },
}
