import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface QsectionProps {
  question: string;
  answer: string;
  onClick: Function;
  open: boolean;
  id: string;
}

const Qsection: React.FC<QsectionProps> = ({ question, answer, id, open, onClick }) => {
  const [isOpen, setIsOpen] = useState(open);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onClick(id);
  };

  const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-blue-russian-gradient p-[1px] hover:shadow-custom-large rounded-xl">
      <div className="bg-[#140930] py-3 px-2 rounded-xl shadow-custom-purple">
        <div
          className="flex justify-between items-center text-white cursor-pointer"
          onClick={handleToggle}
        >
          <h4 className="text-xs md:text-base font-thin md:font-medium">
            {question}
          </h4>
          {isOpen ? (
            <FiChevronUp className="text-base sm:text-sm md:text-base" />
          ) : (
            <FiChevronDown className="text-base sm:text-sm md:text-base" />
          )}
        </div>

        <motion.div
          ref={containerRef}
          variants={variants}
          initial={false}
          animate={isOpen ? 'visible' : 'hidden'}
        >
          <h4 className="text-base font-medium text-gray-400 mt-2">{answer}</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Qsection;