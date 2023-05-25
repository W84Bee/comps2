import {useEffect, useRef, useState} from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    /* useRef
        - Allows a component to get a reference to DOM element that it creates
        - 95% of the time used with DOM elements, but can hold a reference to any value.
        IMPLEMENTATION
            1. Create a ref at the top of your component calling 'useRef'.
            2. Assign the ref to a JSX element as a prop called 'ref'.
            3. Access that DOM element with 'ref.current'.
     */

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
              setIsOpen(false);
            }
        };

        // Makes the document aware when clicks are outside the element
        document.addEventListener('click', handler, true);

        // turn off event handler once Dropdown form is removed
        return () => {
          document.removeEventListener('click', handler);
        };
    }, [])

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // Close Dropdown
        setIsOpen(false);
        // What option did the user click on??
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                 onClick={() =>handleOptionClick(option)}
                 key={option.value}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
}

export default Dropdown;