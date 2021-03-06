import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'



const options = [
    {
        label: 'Uzbek',
        value: 'uz'
    },
     {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Turkish',
        value: 'tr'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[2])
    const [text, setText] = useState('i love you')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="ui label">Enter Your Text in English</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    </div>
                </div>
            <Dropdown
                label='Select a Language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr /> 
            <h3 className="ui header" >Output</h3>
            <Convert text={text} language={language}/>

            
        </div>
    )
}

export default Translate
