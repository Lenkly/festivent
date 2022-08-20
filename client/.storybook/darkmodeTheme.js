import { create } from '@storybook/theming';
import Logo from '../src/assets/festivent-start.png';

export default create({
  base: 'dark',
  brandTitle: 'F E S T I V E N T',
  brandImage: Logo,
  text: '#fff',
  texthighlight: '#fff700',
  background: '#1d1d1d',
  backgroundSignin: 'rgba(29, 29, 29, 0.97)',
  backgroundLogin: 'rgba(62, 62, 62, 0.97)',
});
