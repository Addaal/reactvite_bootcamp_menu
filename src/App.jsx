import { useState } from 'react';
import data from './data.js';
import Menu from './components/Menu.jsx';

function App() {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleToggleMenu = (index) => {
        setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {data.map((item, index) => (
                <Menu 
                    key={index}
                    element={item.element}
                    subElements={item.subElements}
                    isOpen={openMenuIndex === index}
                    onToggle={() => handleToggleMenu(index)}
                />
            ))}
        </>
    );
}

export default App;
