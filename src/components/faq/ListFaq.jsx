import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { LazyMotion, domAnimation, AnimatePresence } from "motion/react";
import * as m from "motion/react-m";

const ListFaq = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <m.div className="w-full rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <p className="text-gray-900 text-lg font-bold">{data?.question}</p>
          <m.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
          </m.div>
        </button>

        {open && (
          <AnimatePresence>
            <m.div
              className="px-4 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 text-base leading-relaxed">
                {data?.answer}
              </p>
            </m.div>
          </AnimatePresence>
        )}
      </m.div>
    </LazyMotion>
  );
};

export default ListFaq;
