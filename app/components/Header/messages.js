/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  SignIn: {
    id: `${scope}.SignIn`,
    defaultMessage: 'Sign In',
  },

  Register: {
    id: `${scope}.Register`,
    defaultMessage: 'Register',
  },	

  Category: {
    id: `${scope}.Category`,
    defaultMessage: 'Category',
  },
});
