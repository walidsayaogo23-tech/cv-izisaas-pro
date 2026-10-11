import React from 'react';

const Icon = ({ children, size = 16 }) => (
  <span style={{ display: 'inline-flex', width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    {children}
  </span>
);

export const Mail = (props) => <Icon {...props}>✉️</Icon>;
export const Phone = (props) => <Icon {...props}>📞</Icon>;
export const Github = (props) => <Icon {...props}>🐙</Icon>;
export const Download = (props) => <Icon {...props}>⬇️</Icon>;
export const MessageCircle = (props) => <Icon {...props}>💬</Icon>;
export const ChevronDown = (props) => <Icon {...props}>⬇</Icon>;
export const ExternalLink = (props) => <Icon {...props}>🔗</Icon>;
export const Menu = (props) => <Icon {...props}>☰</Icon>;
export const X = (props) => <Icon {...props}>✖️</Icon>;
export const Code2 = (props) => <Icon {...props}>{`</>`}</Icon>;
export const Shield = (props) => <Icon {...props}>🛡️</Icon>;
export const Palette = (props) => <Icon {...props}>🎨</Icon>;
export const Terminal = (props) => <Icon {...props}>⌨️</Icon>;
export const Video = (props) => <Icon {...props}>🎥</Icon>;

export default Icon;
