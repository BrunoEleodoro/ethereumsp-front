import * as React from 'react';
import { UnstyledButton, Checkbox, Text, Image, SimpleGrid, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import CreateNftCtxProvider, { CreateNftContext } from '../contexts/CreateNftContext';

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: 'background-color 150ms ease, border-color 150ms ease',
    border: `1px solid ${checked
      ? theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
      }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface ImageCheckboxProps {
  addNetwork: any;
  removeNetwork: any;
  networkKey: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
}

export function ImageCheckbox({
  addNetwork,
  removeNetwork,
  networkKey,
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}: ImageCheckboxProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => {
        handleChange(!value)
        console.log('valeu', value);
        if (!value) {
          addNetwork(networkKey);
        } else {
          removeNetwork(networkKey);
        }
      }}
      className={cx(classes.button, className)}
    >
      <Image src={image} alt={title} width={40} />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {
        }}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}


export function SelectNetwork() {
  const { addNetwork, removeNetwork } = React.useContext(CreateNftContext);
  const mockdata = [
    { description: '', networkKey: "ETHEREUM", title: 'Ethereum', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKBw07LvvHXxN55zwki8xKUX9fSVI08PBeC1gwlgRlA&s' },
    { description: '', networkKey: "BSC", title: 'Binance Smart Chain', image: 'https://assets-cdn.trustwallet.com/blockchains/smartchain/info/logo.png' },
    { description: '', networkKey: "POLYGON", title: 'Polygon', image: 'https://www.freelogovectors.net/svg10/polygon-token-logo-freelogovectors.net_.svg' },
    { description: '', networkKey: "AVAXCCHAIN", title: 'Avalanche', image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Avalanche_logo_without_text.png' },
  ];
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} addNetwork={addNetwork} removeNetwork={removeNetwork} />);
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}
