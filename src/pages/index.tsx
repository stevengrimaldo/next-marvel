import Head from 'next/head';
import { getMarvelCharacters } from '@/lib/marvelCharacters';
import { getMarvelComics } from '@/lib/marvelComics';
import { Features, Header, Hero, Slider } from '@/components/custom';

interface Props {
  comics: {
    thumbnail: {
      extension: string;
      path: string;
    };
    title: string;
  }[];
  ironman: {
    characters: {
      description: string;
      name: string;
      thumbnail: {
        extension: string;
        path: string;
      };
    }[];
  };
}

const Home = (props: Props) => {
  const { comics, ironman } = props;
  const { description, name, thumbnail } = ironman.characters[0];

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta content={description} name="description" />
      </Head>
      <Header />
      <main>
        <Hero description={description} />
        <Features
          features={[
            {
              icon: 'Genius',
              text: 'Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.',
              title: 'Super-Genius Intelligence',
            },
            {
              icon: 'Engineer',
              text: 'He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.',
              title: 'Master Engineer',
            },
            {
              icon: 'Businessman',
              text: "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing.",
              title: 'Master Businessman',
            },
            {
              icon: 'Tactician',
              text: 'He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.',
              title: 'Expert Tactician',
            },
          ]}
          heading="Contrary to popular belief, he knows exactly what he’s doing."
          image={thumbnail.path + '.' + thumbnail.extension}
        />
        <Slider slides={comics} />
      </main>
    </>
  );
};

// This function runs only on the server side
export async function getStaticProps() {
  const ironman = await getMarvelCharacters({
    exactMatch: true,
    name: 'Iron Man',
  });

  const comics = await getMarvelComics(ironman.characters[0].id);

  // Props returned will be passed to the page component
  return { props: { comics, ironman } };
}

export default Home;
