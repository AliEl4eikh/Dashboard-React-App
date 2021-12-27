import { Button } from '@material-ui/core';
import React from 'react';

type Props = {
  className: string;
};

const ChooseButton = ({ className }) => {
  return (
    <Button variant="contained" fullWidth className={className}>
      Choose
    </Button>
  );
};

export default ChooseButton;
