import {
    registerUniformComponent,
    ComponentProps,
  } from "@uniformdev/canvas-react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  
  type HeroProps = ComponentProps<{
    contentfulValueTest: any;
    uniformValueTest: string;
  }>;
  
  const PeterTest: React.FC<HeroProps> = ({ contentfulValueTest, uniformValueTest }: HeroProps) => {
    console.log('contentfulValueTest', contentfulValueTest)
    return (
     <div className="w-full flex flex-col md:flex-row py-4">
      <div className="flex-1 mb-6"></div>
      <p className="text-gray-900 text-right flex-1 leading-8">{uniformValueTest}</p>
      <div className="flex-1 mb-6">
      <p className="text-gray-900 text-right flex-1 leading-8">These are the Contentful values:</p>
      <p className="text-gray-900 text-right flex-1 leading-8">{contentfulValueTest?.fields.headline}</p>
      <p className="text-gray-900 text-right flex-1 leading-8">{contentfulValueTest?.fields.subline}</p>
      <div 
      className="text-gray-900 text-right flex-1 leading-8" 
      dangerouslySetInnerHTML={{ __html: documentToHtmlString(contentfulValueTest?.fields.body) }}></div>
      </div>
    </div>
    )};
  
  registerUniformComponent({
    type: "peterTest",
    component: PeterTest,
  });
  
  
  export default PeterTest;