import * as React from 'react';
import { Text, Group, Button, createStyles } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons';
import { CreateNftContext } from '../contexts/CreateNftContext';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));

export function DropzoneButton() {
  const { enviarImagem, setImage: setImageContext } = React.useContext(CreateNftContext);
  const { classes, theme } = useStyles();
  const [image, setImage] = React.useState<any>(null);
  const [preview, setPreview] = React.useState<any>(null);
  const openRef = React.useRef<() => void>(null);

  React.useEffect(() => {
    if (image !== null) {
      setPreview(URL.createObjectURL(image[0]));
      setImageContext(image[0]);
    }
  }, [image])

  return (
    <div className={classes.wrapper}>
      {image === null ?
        <>
          {/* <Dropzone
            openRef={openRef}
            onDrop={async (e) => {
              console.log(e);
              //setImage(e);
              const res = await enviarImagem(e[0]);
              console.log('res', res);
            }}
            className={classes.dropzone}
            radius="md"
            maxSize={30 * 1024 ** 2}
          >
            <div style={{ pointerEvents: 'none' }}>
              <Group position="center">
                <Dropzone.Accept>
                  <IconDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload
                    size={50}
                    color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                    stroke={1.5}
                  />
                </Dropzone.Idle>
              </Group>

              <Text align="center" weight={700} size="lg" mt="xl">
                <Dropzone.Accept>Solte seu arquivo aqui</Dropzone.Accept>
                <Dropzone.Reject>Arquivos menores que 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload Arte Digital</Dropzone.Idle>
              </Text>
              <Text align="center" size="sm" mt="xs" color="dimmed">
                Clique e arraste aqui para fazer upload da sua arte digital, aceitamos apenas <i>PNG e JPEG</i> que sejam menos de 30MB.
              </Text>
            </div>
          </Dropzone> */}
          <form>
            <input accept="image/*" type='file' id="imgInp" onChange={async (event) => {
              console.log('event', event.target.files);
              if (event.target.files!.length > 0) {
                setImage(event.target.files!);
              }
            }} />
          </form>

          {/* <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
            Selecionar Arquivos
          </Button> */}
        </>
        : <>
          <img src={preview} width={'100%'} />
          <br />
          <br />
          <Button onClick={() => {
            setImage(null);
            setPreview(null);
          }}
          >Escolher outra</Button>
        </>}
    </div>
  );
}

