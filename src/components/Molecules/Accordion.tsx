import React, { useRef, useState } from 'react';
import { mergeClassNames } from '../../helpers/styles';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, onToggle }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    if (typeof onToggle === 'function') {
      onToggle();
    }
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
  }

  return (
    <div className="flex flex-col">
      <button
        className={mergeClassNames(
          'box-border flex cursor-pointer appearance-none items-center justify-between bg-brand-blue px-3 py-2 transition-all duration-300 focus:outline-none md:px-6',
          active ? 'delay-0 rounded-t-md' : 'rounded-md delay-500'
        )}
        onClick={toggleAccordion}
      >
        <p className="inline-block font-normal text-white">{title}</p>
        <i
          className={`fa-solid fa-chevron-down text-white ${
            active ? 'rotate-0' : '-rotate-90'
          } ease transform duration-700`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={
          'transition-max-height overflow-hidden rounded-b-md bg-brand-blue px-3 duration-700 ease-in-out md:px-6'
        }
      >
        <div className="mt-4 pb-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
