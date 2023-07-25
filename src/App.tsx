import {
    useCallback,
    useState,
    MouseEvent,
    KeyboardEvent,
    useMemo,
    useRef,
    useEffect,
} from 'react';

interface User {
    id: number;
    username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = n => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

const myNumber: number = 37;

function App() {
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log('mounting');
        console.log('users', users);
        return () => console.log('unmounting');
    }, [users]);

    const addTwo = useCallback(
        (): // e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
        void => setCount(prev => prev + 2),
        []
    );

    const result = useMemo<number>(() => fib(myNumber), [myNumber]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={addTwo}>Add two</button>
            <h2>{result}</h2>
            <input ref={inputRef} type='text' />
        </>
    );
}

export default App;
