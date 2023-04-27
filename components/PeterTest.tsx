'use client';
import {
    registerUniformComponent,
    ComponentProps,
  } from "@uniformdev/canvas-react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { SfButton } from '@storefront-ui/react';
import DogeBanner from "./DogeBanner";
import ContentfulDrawer from "./ContenfulDrawer";
  
  type HeroProps = ComponentProps<{
    contentfulValueTest: any;
    uniformValueTest: string;
  }>;
  
  const PeterTest: React.FC<HeroProps> = ({ contentfulValueTest, uniformValueTest }: HeroProps) => {
    console.log('contentfulValueTest', contentfulValueTest)
    return (
      <>
     <div className="w-full flex flex-col py-4">
      <div className="flex-1 mb-6">
        <DogeBanner uniformVal={uniformValueTest} />
      </div>
      <div className="flex justify-center mb-6">
      <ContentfulDrawer contentfulValueTest={contentfulValueTest?.fields}/>
      </div>
      {/* <div className="flex-1 mb-6">
      <p className="text-gray-900 text-right flex-1 leading-8">These are the Contentful values:</p>
      <p className="text-gray-900 text-right flex-1 leading-8">{contentfulValueTest?.fields.headline}</p>
      <p className="text-gray-900 text-right flex-1 leading-8">{contentfulValueTest?.fields.subline}</p>
      <div 
      className="text-gray-900 text-right flex-1 leading-8" 
      dangerouslySetInnerHTML={{ __html: documentToHtmlString(contentfulValueTest?.fields.body) }}></div>
      </div> */}
    </div>
      <SfButton type="button" className="w-full" onClick={() => alert('Hey you clicked me')}>
      Hello
    </SfButton>
    </>
    )};
  
  registerUniformComponent({
    type: "peterTest",
    component: PeterTest,
  });
  
  
  export default PeterTest;