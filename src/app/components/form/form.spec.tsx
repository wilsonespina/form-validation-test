import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Form title="Test Title" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render title', () => {
    const { getByRole } = render(<Form title="Test Title" />);
    expect(getByRole('heading', {
      name: /test title/i
    })).toBeTruthy();
  });
});
