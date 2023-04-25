import {
    registerUniformComponent,
    ComponentProps,
  } from "@uniformdev/canvas-react";
  
  type HeroProps = ComponentProps<{
    contentfulValueTest: string;
    uniformValueTest: string;
  }>;
  
  const PeterTest: React.FC<HeroProps> = ({ contentfulValueTest, uniformValueTest }: HeroProps) => {
    console.log('contentfulValueTest', contentfulValueTest)
    return (
     <div className="w-full flex flex-col md:flex-row py-4">
      <div className="flex-1 mb-6"></div>
      <p className="text-gray-900 text-right flex-1 leading-8">{uniformValueTest}</p>
    </div>
    )};
  
  registerUniformComponent({
    type: "peterTest",
    component: PeterTest,
  });
  
  
  export default PeterTest;