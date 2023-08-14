import React from 'react';

const useTyping = (sentence: string, ms_delay = 200) => {
  const [word, setWord] = React.useState('');
  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (sentence.length > currentIndex) {
        setWord((state) => {
          currentIndex += 1;
          return (state += sentence[currentIndex]);
        });
      }
    }, ms_delay);

    return () => clearTimeout(interval);
  }, [ms_delay, sentence]);
  return word;
};

export default useTyping;
