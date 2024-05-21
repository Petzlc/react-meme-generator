// import FetchImages from './FetchImages';
import InputFields from './InputFields';
import SecondTestFetch from './SecondTestFetch';

// import TestFetch from './TestFetch';

export default function App() {
  return (
    <>
      <div>Hello world!</div>
      <h1>React Meme Generator</h1>
      <InputFields />
      {/* <FetchImages /> This solution requires to put in all the HTML src of the meems by hand which is a very impractical solution when you have more then 20 memes */}
      <br />
      <br />
      <br />
      <br />
      {/* <TestFetch />   creates a button to fetch and display img from a website, but i think you might need to download all the img in order to do that and this is not the approach i wanted*/}
      <SecondTestFetch />
    </>
  );
}
