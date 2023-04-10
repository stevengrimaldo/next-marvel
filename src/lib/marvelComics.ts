import md5 from 'md5';

// The following function is shared
// with getStaticProps and API routes

export const getMarvelComics = async (characterId: string) => {
  const now = Date.now();

  const apiUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics`;

  const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;

  const params: any = {
    apikey: publicKey,
    ts: now,
  };
  params.hash = md5(params.ts + privateKey + publicKey);

  const url = `${apiUrl}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`;

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      try {
        if (res.code === 200) {
          return res.data.results;
        } else {
          throw new Error(`Marvel API bad response. Status code ${res.code}.`);
        }
      } catch (e) {
        console.error(e);

        return [];
      }
    });
};
