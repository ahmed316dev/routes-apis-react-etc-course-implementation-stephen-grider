import React, {useState} from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'


const options = [
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {

    const [text, setText] = useState('')

    const [language, setLanguage] = useState(options[0])

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <br/>
            <Dropdown label={"Select a Language"} options={options} selected={language} onSelectedChange={setLanguage} />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate
