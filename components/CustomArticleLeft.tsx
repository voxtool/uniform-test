'use client';
import {
    registerUniformComponent,
    ComponentProps,
  } from "@uniformdev/canvas-react";
  import classNames from 'classnames';
import Image from 'next/image';
import doge from '../public/doge.png';
import ExperimentalButton from './ExperimentalButton';
  
  type ArticleProps = ComponentProps<{
    testArticle: string;
    headingTest: string;
  }>;
  
  const CustomArticleLeft: React.FC<ArticleProps> = ({ testArticle, headingTest }: ArticleProps) => {
    console.log('testArticle', testArticle)
    return (
        <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1000px]">
        <div
          className={classNames(
            'relative flex md:max-w-[1000px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
            'bg-warning-200',
          )}
        >
          <div
            className={classNames('flex justify-between overflow-hidden grow')}
          >
            <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
              <h2 className={classNames('mb-4 mt-2 font-bold typography-headline-3', 'md:typography-headline-2')}>{headingTest}</h2>
              <p className="typography-text-base block mb-4">{testArticle}</p>
              <ExperimentalButton type='button' onClick={() => alert('Woohoo')}>To the moon!</ExperimentalButton>
            </div>
            <Image src={doge} alt='smth' className="w-1/2 self-end object-contain" />
          </div>
        </div>
    </div>
    )};
  
  registerUniformComponent({
    type: "testVariants",
    variantId: 'left',
    component: CustomArticleLeft,
  });
  
  
  export default CustomArticleLeft;