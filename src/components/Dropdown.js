import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false)
    const [color, setColor] = useState(options[0].value)
    const ref = useRef()

    const renderedOptions = options.map( option =>{

        if(selected.value === option.value) return null

        return(
            <div onClick={()=>{
                onSelectedChange(option)
                setColor(option.value)
                }} className='item' key={option.value}>
                {option.label}
            </div>
        )
    })
    
    useEffect(()=>{
        const onBodyClick =  (e)=>{
            if(ref.current && ref.current.contains(e.target)) return 
            setOpen(false)

        }

        document.body.addEventListener('click', onBodyClick, {capture: true})
        
    }, [])
    return (
        <div ref={ref} className='ui form' >
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className={`dropdown icon ${open ? 'active':''}`} ></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
