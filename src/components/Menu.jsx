import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

export default function Menu(props) {
    const [showArrow, setShowArrow] = useState(true);
    const [showSubElements, setShowSubElements] = useState(false);

    useEffect(() => {
        if (props.subElements.length === 0) {
            setShowArrow(false);
        }
    }, [props.subElements]);

    useEffect(() => {
        setShowSubElements(props.isOpen);
    }, [props.isOpen]);

    const toggleSubElements = () => {
        setShowSubElements(!showSubElements);
        props.onToggle();
    };

    return (
        <div className={`flex flex-col w-60 transition ease-in-out duration-200`}>
            <div onClick={toggleSubElements}>
                <MenuItem
                    elementName={props.element}
                    color="black"
                    showArrow={showArrow}
                    arrowDirection={showSubElements ? 'down' : ''}
                />
            </div>
            {showSubElements &&
                <div className={` transition flex flex-col pl-4 ease-in-out duration-200 ${showSubElements ? ' opacity-100' : 'opacity-0'}`}>
                    {props.subElements.map((item, index) => (
                        <MenuItem key={index} elementName={item} color="blue-700" />
                    ))}
                </div>
            }



        </div>
    );
}
