import { createStyles } from '@mantine/styles';

interface ModalBaseContentStylesParams {
  zIndex: number;
}

export default createStyles((theme, { zIndex }: ModalBaseContentStylesParams) => ({
  inner: {
    position: 'fixed',
    width: '100%',
    top: 0,
    bottom: 0,
    zIndex,
    pointerEvents: 'none',
  },

  content: {
    pointerEvents: 'all',
    width: 400,
    margin: 'auto',
    marginTop: 40,
  },
}));
