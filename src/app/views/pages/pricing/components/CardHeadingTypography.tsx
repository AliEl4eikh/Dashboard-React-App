import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';

type Props = {
  typeOfSubscription: string;
  price: number;
  numberOfUsers?: number;
  unlimited?: boolean;
  inheritColor?: boolean;
};

const HeadingTypography = ({
  typeOfSubscription,
  price,
  numberOfUsers,
  unlimited,
  inheritColor,
}: Props) => {
  return (
    <>
      <Typography
        component="h4"
        gutterBottom
        variant="overline"
        color={inheritColor ? 'inherit' : 'textSecondary'}
      >
        {typeOfSubscription}
      </Typography>
      <div>
        <Typography
          component="span"
          display="inline"
          variant="h4"
          color={inheritColor ? 'inherit' : 'textPrimary'}
        >
          {`\$${price}`}
        </Typography>
        <Typography
          component="span"
          display="inline"
          variant="subtitle2"
          color={inheritColor ? 'inherit' : 'textSecondary'}
        >
          /month
        </Typography>
      </div>
      <Typography
        variant="overline"
        color={inheritColor ? 'inherit' : 'textSecondary'}
      >
        {unlimited ? 'UNLIMITED' : `Max ${numberOfUsers} user`}
      </Typography>
      <Box my={2}>
        <Divider />
      </Box>
    </>
  );
};

export default HeadingTypography;
