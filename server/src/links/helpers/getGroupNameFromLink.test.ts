import { getGroupNameFromLink } from './getGroupNameFromLink';

describe('groupname', () => {
  it('works with url with http', () => {
    expect(
      getGroupNameFromLink(
        'https://www.youtube.com/watch?v=Wd_idMpg_qQ&index=3&list=RDypVUjBGVoGQ',
      ),
    ).toBe('youtube.com');
  });
  it('works with url without http', () => {
    expect(
      getGroupNameFromLink(
        'www.youtube.com/watch?v=Wd_idMpg_qQ&index=3&list=RDypVUjBGVoGQ',
      ),
    ).toBe('youtube.com');
  });
  it('works with url without http or www', () => {
    expect(
      getGroupNameFromLink(
        'youtube.com/watch?v=Wd_idMpg_qQ&index=3&list=RDypVUjBGVoGQ',
      ),
    ).toBe('youtube.com');
  });
});
