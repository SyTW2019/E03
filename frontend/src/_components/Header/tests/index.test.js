import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';

import Header from '../index';
import configureStore from '../../../configureStore';

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it((), () => {
    const { container } = render(
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
