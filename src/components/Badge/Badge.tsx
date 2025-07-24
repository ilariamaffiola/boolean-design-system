import React from 'react';
import root from 'react-shadow';
import css from './Badge.css?raw'; // Assuming you have a CSS file for styling the Badge component

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'neutral' | 'positive' | 'negative';
} & React.HTMLAttributes<HTMLDivElement>;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  ...attrs
}) => {
  return (
    <root.div>
      <style>{css}</style>
      <div className={`badge ${variant}`} {...attrs}>
      {children}
      </div>
    </root.div>
    
  );
};
