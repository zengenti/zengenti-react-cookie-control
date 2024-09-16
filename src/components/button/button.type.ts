export type ButtonProps = {
  id: string;
  label: string;
  onClick: () => void;
  type?: 'solid' | 'hollow';
};
