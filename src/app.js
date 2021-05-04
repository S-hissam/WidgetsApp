import React,{useState} from 'react'
import Accordion from './components/accordion'
import SearchBar from './components/Searchbar'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


 
const items = [
    {
        title: 'what is it',
        content: 'its you do it.djasdffdsfsdfasdfasdf'
    },
    {
        title: 'do you love me?',
        content: 'its you do it.djasdffdsfsdfasdfasdf'
    },
    {
        title: 'where are you from?',
        content: 'its you do it.djasdffdsfsdfasdfasdf'
    }
]

const options = [
    {
        label: 'the Color Red',
        value: 'Red'
    },
    {
        label: 'the Color white',
        value: 'White'
    },
    {
        label: 'the Color Green',
        value: 'Green'
    }
] 

//   const showAccordion = () => {
//         if (window.location.pathname === '/') { return <Accordion items={items} />; }
//     }

//     const showList = () => { 
//         if (window.location.pathname === '/list')
//         {
//             return <SearchBar />
//         }
//     }

//     const showDropdown = () => {
//         if (window.location.pathname === '/dropdown')
//         {
//             return <Dropdown/>
//         }
//     }

//     const showTranslate = () => {
//         if (window.location.pathname === '/translate')
//         {
//             return <Translate />
//         }
//     }

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container">

            <div className="ui container">
             <Header />
            <Route path="/">
                <Accordion items={items} />
                </Route>
            <Route path="/list">
                <SearchBar />
                </Route>
            <Route path="/translate">
                <Translate /> </Route>
            <Route path="/dropdown">
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                        label='Select a Color'/> </Route>

            </div>
            
        </div>
    )
}

export default App

