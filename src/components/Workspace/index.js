import React from 'react';
import Description from './Description';
import Summary from './Summary';
import Questions from './Questions';

const WorkSpace = ({ tab, ...props }) => {
  const injectContent = () => {
    if (!!tab.question) {
      return <Questions {...props} tab={tab} />;
    }

    switch (tab.name) {
      case 'Description':
        return <Description {...props} />;
      case 'Summary':
        return <Summary {...props} />;
    }
  };

  return (
    <div className="p-8">
      <div className="text-2xl text-left font-bold ">{tab.name}</div>
      {injectContent()}
    </div>
  );
};

export default WorkSpace;
