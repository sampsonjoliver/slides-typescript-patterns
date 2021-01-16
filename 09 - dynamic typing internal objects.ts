// Dynamic-typing prototypal inheritance
// Objective 1: Define the MemeService type
// Objective 2: Define the MemeService type in one line

type Image = any; // 🤷‍♂️
type MemeProps = {
  topText: string;
  bottomText: string;
  image: Image;
};

type Meme = Image

const makeMemeADayService = (memeGeneratorRepository, memeSearchRepository): MemeService => {
  
  return {
    generateMeme: () => { },
    fetchMeme: () => { }
  };
};

const makeMemeGeneratorRepository = () => {
  const generateMeme = (props: MemeProps): Meme => {
      return fetch({ url: 'makemymeme.com', method: 'post', ...});
  };
  
  return {
    generateMeme
  }
}

const makeMemeSearchRepository = () => {
  const fetchMeme = (url: string): Meme => {
      return fetch(url);
  };
  
  return {
    fetchMeme
  }
}