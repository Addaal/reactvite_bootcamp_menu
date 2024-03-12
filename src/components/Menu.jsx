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
        <div className="flex flex-col w-60">
            <div onClick={toggleSubElements}>
                <MenuItem
                    elementName={props.element}
                    color="black"
                    showArrow={showArrow}
                    arrowDirection={showSubElements ? 'down' : ''}
                />
            </div>
            {showSubElements && (
                <div className={`flex flex-col pl-4 transition-opacity duration-500 ease-in-out opacity-${showSubElements ? '100' : '0'}`}>
                    {props.subElements.map((item, index) => (
                        <MenuItem key={index} elementName={item} color="blue-700" />
                    ))}
                </div>
            )}
        </div>
    );
}
