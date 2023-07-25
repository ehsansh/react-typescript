import { Counter } from './Counter';

function App() {
    return (
        <>
            <Counter>{(num: number) => <>Current count is{num}</>}</Counter>
        </>
    );
}

export default App;
