import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import EncyclopediaSection from '../../components/EncyclopediaSection';

describe('Portal content and tracking contract', () => {
  it('uses 41 courses consistently in the static shell and metadata', () => {
    const indexPath = resolve(process.cwd(), 'index.html');
    const html = readFileSync(indexPath, 'utf8');

    expect(html).toContain('41 Cursos de Fisioterapia');
    expect(html).not.toContain('38 Cursos de Fisioterapia');
  });

  it('uses 41+ courses in the course volume block', () => {
    const { getByText, queryByText } = render(<EncyclopediaSection />);

    expect(getByText('170+ Aulas e 41+ Cursos')).toBeInTheDocument();
    expect(queryByText('170+ Aulas e 38+ Cursos')).not.toBeInTheDocument();
  });
});
