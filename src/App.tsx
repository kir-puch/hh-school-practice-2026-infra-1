import { useState } from 'react';
import chroma from 'chroma-js'; // installed from npm

const quotes = [
    'If you know the enemy and know yourself, you need not fear the result of a hundred battles.',
    'The supreme art of war is to subdue the enemy without fighting.',
    'Appear weak when you are strong, and strong when you are weak.',
    'The greatest victory is that which requires no battle.',
    'In the midst of chaos, there is also opportunity.',
    "Whatever you do, don't reveal all your techniques in a YouTube video, you fool, you moron.", // RIP Technoblade o7
    'All warfare is based on deception.',
    'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
    'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.',
    'He will win who knows when to fight and when not to fight.',
    'When you surround an army, leave an outlet free. Do not press a desperate foe too hard.',
    'Move swift as the wind and closely-formed as the wood. Attack like the fire and be still as the mountain.',
    'There is no instance of a nation benefitting from prolonged warfare.',
    'Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.',
    'Who wishes to fight must first count the cost.',
];

export default function App() {
    const [quote, setQuote] = useState(quotes[0]);
    const [bg, setBg] = useState('#222222');

    const getQuote = () => {
        const remaining = quotes.filter((q) => q !== quote);
        const next = remaining[Math.floor(Math.random() * remaining.length)];
        setQuote(next);
        setBg(chroma.random().darken(4).hex());
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: bg,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                transition: 'background-color 0.5s ease',
                fontFamily: 'Georgia, serif',
            }}
        >
            <h1
                style={{
                    color: '#c9a84c',
                    fontSize: '6rem',
                    letterSpacing: '0.3em',
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                }}
            >
                Sun Tzu
            </h1>
            <p
                style={{
                    color: '#f0e6d3',
                    fontSize: '1.5rem',
                    width: '700px',
                    height: '100px',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    marginBottom: '3rem',
                    minHeight: '5rem',
                }}
            >
                "{quote}"
            </p>
            <button
                onClick={getQuote}
                style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #c9a84c',
                    color: '#c9a84c',
                    padding: '0.75rem 2rem',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    letterSpacing: '0.1em',
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c9a84c';
                    e.currentTarget.style.color = '#1a1a2e';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#c9a84c';
                }}
            >
                New Quote
            </button>
        </div>
    );
}
