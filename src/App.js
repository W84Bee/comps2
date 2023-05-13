import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'bryker',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
        },
        {
            id: 'jabari',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.',
        },
        {
            id: 'taysom',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.',
        }

    ];
    return <Accordion items={items}/>
};

export default App;