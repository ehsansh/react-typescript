import Counter from './components/Counter';
import Heading from './components/Heading';
import List from './components/List';
import Section from './components/Section';
import { useState } from 'react';
function App() {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <Heading title={'hello!'} />
            <Section title={'different title'}>This is my section</Section>
            <Counter setCount={setCount}>count is {count}</Counter>
            <List
                items={['coffe', 'game', 'code']}
                render={(item: string) => <span className='gold'>{item}</span>}
            />
        </>
    );
}

export default App;
