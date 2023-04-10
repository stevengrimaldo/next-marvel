import md5 from 'md5';

// The following function is shared
// with getStaticProps and API routes

interface Options {
  exactMatch?: boolean;
  limit?: number;
  name?: string;
  offset?: number;
  sortName?: string;
}

export const getMarvelCharacters = async (options?: Options) => {
  const now = Date.now();

  const apiUrl = 'https://gateway.marvel.com/v1/public/characters';

  const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;

  const params: any = {
    apikey: publicKey,
    ts: now,
  };
  params.hash = md5(params.ts + privateKey + publicKey);

  const { exactMatch, limit, name, offset, sortName } = Object.assign(
    {
      exactMatch: false,
      limit: 20,
      name: '',
      offset: 0,
      sortName: '',
    },
    options
  );

  let url = `${apiUrl}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`;

  if (name) {
    if (exactMatch) {
      url += `&name=${name}`;
    } else {
      url += `&nameStartsWith=${name}`;
    }
  }

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      try {
        if (res.code === 200) {
          if (offset > res.data.total) {
            throw new Error('Page does not exist.');
          } else {
            const pages = Math.floor(res.data.total / limit);

            return {
              characters: res.data.results,
              maxPage: res.data.total % limit > 0 ? pages + 1 : pages,
            };
          }
        } else {
          throw new Error(`Marvel API bad response. Status code ${res.code}.`);
        }
      } catch (e) {
        console.error(e);

        return {
          characters: [],
          maxPage: 0,
        };
      }
    });
};
