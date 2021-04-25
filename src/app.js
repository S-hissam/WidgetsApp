import React from 'react'
import Accordion from './components/accordion'
import SearchBar from './components/Searchbar'
 
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

const app = () => {
    return (
        <div className="ui container">
            <SearchBar />
        </div>
    )
}

export default app
