import React from 'react';
import './Badge.css'; // Assuming you have a CSS file for styling the Badge component

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="badge">{children}</div>
);
