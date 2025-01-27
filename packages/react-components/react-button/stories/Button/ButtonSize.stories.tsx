import * as React from 'react';
import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular } from '@fluentui/react-icons';
import { makeStyles, Button, Tooltip } from '@fluentui/react-components';

const useStyles = makeStyles({
  innerWrapper: {
    columnGap: '15px',
    display: 'flex',
  },
  outerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  },
});

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

export const Size = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Button size="small">Small</Button>
        <Button size="small" icon={<CalendarMonth />}>
          Small with calendar icon
        </Button>
        <Tooltip content="Small with calendar icon only" relationship="label">
          <Button size="small" icon={<CalendarMonth />} />
        </Tooltip>
      </div>
      <div className={styles.innerWrapper}>
        <Button>Medium</Button>
        <Button icon={<CalendarMonth />}>Medium with calendar icon</Button>
        <Tooltip content="Medium with calendar icon only" relationship="label">
          <Button icon={<CalendarMonth />} />
        </Tooltip>
      </div>
      <div className={styles.innerWrapper}>
        <Button size="large">Large</Button>
        <Button size="large" icon={<CalendarMonth />}>
          Large with calendar icon
        </Button>
        <Tooltip content="Large with calendar icon only" relationship="label">
          <Button size="large" icon={<CalendarMonth />} />
        </Tooltip>
      </div>
    </div>
  );
};
Size.parameters = {
  docs: {
    description: {
      story: 'A button supports `small`, `medium` and `large` size. Default size is `medium`.',
    },
  },
};
