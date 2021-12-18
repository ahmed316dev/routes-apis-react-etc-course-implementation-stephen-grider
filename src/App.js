import React, {useState} from 'react'
import Dropdown from './components/Dropdown'
import Route from './components/Route'
import Translate from './components/Translate'
import Accordion from './/components/Accordion'
import Search from './components/Search'
import Header from './components/Header'


const items = [
    {
        title:'Curabitur ullamcorper massa',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tincidunt et sem vitae pretium.'
    },
    {
        title:'Cras ut arcu feugiat',
        content: 'ullamcorper velit at, lacinia felis. Sed tempor dapibus convallis. Praesent vestibulum leo nec turpis egestas, non vehicula arcu mattis.'
    },
    {
        title:'Integer imperdiet ex eleifend',
        content: 'placerat odio sed, lacinia nisi. In interdum ante est, ut consequat elit ornare eu. Quisque feugiat vulputate metus, ut aliquet mi varius et.'
    },
    {
        title:'Duis dignissim varius consectetur',
        content: 'Etiam sit amet feugiat orci. Fusce molestie, mi id ullamcorper iaculis, arcu mauris facilisis nisi, quis maximus nulla metus maximus libero. Proin lobortis tempor sapien.'
    },
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    },
]

const App = () => {

    const [selected, setSelected] = useState(options[0])

    return (
        <div className='ui container'> 
            <Header />
            <Route path='/'> <Accordion items={items} /> </Route>
            <Route path='/list'> <Search/></Route>
            <Route path='/dropdown'> <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} /></Route>
            <Route path='/translate'> <Translate/></Route>
        </div>
    )
}

export default App
