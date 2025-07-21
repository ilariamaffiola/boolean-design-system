import type { Meta, StoryObj } from "@storybook/react";
// Update the import path if Badge is located elsewhere, for example:
import { Badge } from "../components/Badge/Badge";


const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Badge  />,
};
