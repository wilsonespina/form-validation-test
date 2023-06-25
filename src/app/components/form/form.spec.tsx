import { render } from '@testing-library/react';

import Form from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Form title="Test Title" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render title', () => {
    const { baseElement } = render(<Form title="Test Title" />);
    expect(baseElement).toBeTruthy();
  });
});
