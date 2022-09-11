import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../components/Table';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              O <span className={classes.highlight}>maior</span> Agregador<br /> de NFTs focado em artistas
            </Title>
            <Text color="dimmed" mt="md">
              Com as artes digitais que voce ja tem hoje, voce sabia que ja pode criar NFTs!?
            </Text>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all components and hooks
                export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control} onClick={() => navigate(window.location.pathname + '/create')}>
                Criar NFT
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={"https://raw.githubusercontent.com/mantinedev/ui.mantine.dev/9d41159486b6d22452ba3a21ee23d9463c289232/components/HeroBullets/image.svg"} className={classes.image} />
        </div>
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
