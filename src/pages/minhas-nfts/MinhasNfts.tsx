import * as React from 'react';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Container } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { MinhasNftsContext } from '../../contexts/MinhasNftsContext';
import { Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export default function MinhasNfts() {
  const { classes } = useStyles();
  const { image } = React.useContext(MinhasNftsContext);
  const nft = JSON.parse(localStorage.getItem('transaction') ?? "{}");

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Grid>
      <Grid.Col span={3}>

        <Container>
          <Card withBorder radius="md" className={classes.card} style={{ width: '300px' }}>
            <Card.Section className={classes.imageSection}>
              <Image src={image} alt="Imagem nft" />
            </Card.Section>
            <Group position="apart" mt="md">
              <div>
                <Text weight={500}>{nft?.name}</Text>
                <Text size="xs" color="dimmed">
                  {nft?.descricao}
                </Text>
              </div>
            </Group>


            <Card.Section className={classes.section}>
              <Group spacing={30}>
                <div>
                  <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                    0.05 ETH
                  </Text>
                  <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                  </Text>
                </div>

                <Button radius="xl" style={{ flex: 1 }} onClick={() => {
                  window.open('https://mumbai.polygonscan.com/tx/' + nft?.hash, '_blank');
                }}>
                  Visualizar
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Container>

      </Grid.Col>
      <Grid.Col span={3}>

        <Container>
          <Card withBorder radius="md" className={classes.card} style={{ width: '300px' }}>
            <Card.Section className={classes.imageSection}>
              <Image src={"https://ethereumsp-front.infura-ipfs.io/ipfs/QmeEBcZy1AbdVgrLXGzZ2v37fLQ1pbhmGrctYy7BBUjWZi"} alt="Imagem nft" />
            </Card.Section>
            <Group position="apart" mt="md">
              <div>
                <Text weight={500}>{nft?.name}</Text>
                <Text size="xs" color="dimmed">
                  {nft?.descricao}
                </Text>
              </div>
            </Group>


            <Card.Section className={classes.section}>
              <Group spacing={30}>
                <div>
                  <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                    0.05 ETH
                  </Text>
                  <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                  </Text>
                </div>

                <Button radius="xl" style={{ flex: 1 }} onClick={() => {
                  window.open('https://mumbai.polygonscan.com/tx/' + nft?.hash, '_blank');
                }}>
                  Visualizar
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Container>
      </Grid.Col>
      <Grid.Col span={3}>

        <Container>
          <Card withBorder radius="md" className={classes.card} style={{ width: '300px' }}>
            <Card.Section className={classes.imageSection}>
              <Image src={"https://ethereumsp-front.infura-ipfs.io/ipfs/QmV64V2i71HJDLnzaRawyG7LbzCVdEHhNjxCNX5t2XruVp"} alt="Imagem nft" />
            </Card.Section>
            <Group position="apart" mt="md">
              <div>
                <Text weight={500}>{nft?.name}</Text>
                <Text size="xs" color="dimmed">
                  {nft?.descricao}
                </Text>
              </div>
            </Group>


            <Card.Section className={classes.section}>
              <Group spacing={30}>
                <div>
                  <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                    0.05 ETH
                  </Text>
                  <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                  </Text>
                </div>

                <Button radius="xl" style={{ flex: 1 }} onClick={() => {
                  window.open('https://mumbai.polygonscan.com/tx/' + nft?.hash, '_blank');
                }}>
                  Visualizar
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Container>
      </Grid.Col>
    </Grid>
  );
}
