import { Button } from '@jag-ui-react/components';
import React from 'react';

const SwitchTheme = ({ onClick }) => {
  return (
    <Button title="Change color mode" onClick={onClick} display="flex">
      Switch Theme
    </Button>
  );
};

SwitchTheme.propTypes = {};

export default SwitchTheme;
