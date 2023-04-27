'use client';
import { SfDrawer, SfButton, SfIconFavorite, SfIconClose, useTrapFocus } from '@storefront-ui/react';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function ContentfulDrawer({contentfulValueTest}) {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const drawerRef = useRef(null);

  useTrapFocus(drawerRef, { activeState: open });

  return (
    <>
      <SfButton onClick={() => setOpen(true)} type="button">
      These are the Contentful values
      </SfButton>

      <CSSTransition
        ref={nodeRef}
        in={open}
        timeout={500}
        unmountOnExit
        classNames={{
          enter: '-translate-x-full',
          enterActive: 'translate-x-0 transition duration-500 ease-in-out',
          exitDone: 'translate-x-0',
          exitActive: '-translate-x-full transition duration-500 ease-in-out',
        }}
      >
        <SfDrawer
          ref={drawerRef}
          open
          onClose={() => setOpen(false)}
          className="bg-neutral-50 border border-gray-300 max-w-[370px]"
        >
          <header className="flex items-center justify-between px-10 py-6 bg-primary-700">
            <div className="flex items-center text-white">
              <SfIconFavorite className="mr-2" /> These are the Contentful values
            </div>
            <SfButton
              square
              variant="tertiary"
              onClick={() => {
                setOpen(!open);
              }}
              className="text-white"
            >
              <SfIconClose />
            </SfButton>
          </header>
          <div className="p-5 px-10">
            <p className="mb-2">
            {contentfulValueTest?.headline}
            </p>
            <p className="mb-2">
            {contentfulValueTest?.subline}
            </p>
            <div 
        className="text-gray-900 flex-1 leading-8" 
        dangerouslySetInnerHTML={{ __html: documentToHtmlString(contentfulValueTest?.body) }}></div>
          </div>
        </SfDrawer>
      </CSSTransition>
    </>
  );
}
