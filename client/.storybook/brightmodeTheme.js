import { create } from '@storybook/theming';
import Logo from '../src/assets/festivent-start.png';

export default create({
  base: 'light',
  brandTitle: 'F E S T I V E N T',
  brandImage: Logo,
  text: '#000',
  texthighlight: '#bb00ff',
  background: '#f9f9f9',
  backgroundSignin: 'rgba(249, 249, 249, 0.97)',
  backgroundLogin: 'rgba(230, 230, 230, 0.97)',
});
