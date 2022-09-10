import { createStyles, Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import TableComponent from '../../components/Table';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 0,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.sm,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          O maior{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Agregador de NFTs
          </Text>{' '} Focado em artistas
        </h1>
        { /*
        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text> */}

      </Container>
      <Container>

        <TableComponent data={[
          {
            id: "abc",
            avatar: 'https://webhaga.com/wp-content/uploads/2020/11/logo.png',
            name: "Avalanche",
            volume: '300 AVAX',
            sells: '15k',
            totalNfts: '200k'
          },
          {
            id: "abc",
            avatar: 'https://th.bing.com/th/id/OIP.ZZSxbwfHx0kf4TNqEDTJ3QHaHa?pid=ImgDet&rs=1',
            name: "Ethereum",
            volume: '100 ETH',
            sells: '1k',
            totalNfts: '200k'
          },
          {
            id: "abc",
            avatar: 'https://th.bing.com/th/id/OIP.lWCuHMxDTww1eILptWyOOAHaHa?pid=ImgDet&rs=1',
            name: "Polygon",
            volume: '300 MATIC',
            sells: '15k',
            totalNfts: '200k'
          },
        ]} />

      </Container>
    </div>
  );
}
