import React from 'react';
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function CollapsibleBox({ heading, content }) {
  const style = {
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem',
  }
  return (
    <>
      <Collapsible
        trigger={[heading, <HiOutlineChevronDown style={{ color: '#005CFF', fontSize: '20px !important' }} />]}
        triggerWhenOpen={[heading, <HiOutlineChevronUp style={{ color: '#005CFF', fontSize: '20px' }} />]}
        triggerStyle={style}
      >
        {content}
      </Collapsible >

      {/* line */}
      <div style={{ width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 1, marginTop: '0.5rem', }}></div>
    </>
  );
}