import { Link, LinkProps } from 'expo-router';
import React from 'react';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends LinkProps {
    
}

const ThemeLink = ({style, ...rest}:Props) => {
  const colorPrimary = useThemeColor({}, "primary");

  return (
    <Link
        style={[
            {
                color: colorPrimary
            },
            style
        ]}
        {...rest}
    />
  )
}

export default ThemeLink