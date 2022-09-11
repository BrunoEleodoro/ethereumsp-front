import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { DropzoneButton } from '../components/Dropzone';
import DetalhesNft from './DetalhesNft';

const PRIMARY_COL_HEIGHT = 300;

export function CreateNFT() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Container>
          <DropzoneButton />
        </Container>
        <DetalhesNft />
      </SimpleGrid>
    </Container>
  );
}
