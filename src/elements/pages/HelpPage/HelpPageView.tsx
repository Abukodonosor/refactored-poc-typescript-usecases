import React from 'react';
import { HelpStyles, Item } from './style';
import { HelpPageInputProps } from './types';
import { HelpCard, ContentTableList, Wrapper } from '../../components';

export const HelpPageView: React.FC<HelpPageInputProps> = ({ active, cardData, pinned }) => {
  const styles = HelpStyles();

  if (!(sessionStorage.getItem('authenticated') || localStorage.getItem('authenticated'))) {
    return null;
  }

  const listOfComponents = cardData.map(({ itemId, title, description }) => (
    <HelpCard
      pinned={pinned}
      itemId={itemId}
      title={title}
      description={description}
      elevation={0}
    />
  ));

  /* TODO: change all typography classname to correct variant after global styling implemented */
  return (
    <Wrapper pinned={pinned}>
      <div className={styles.helpPage}>
        <div className={styles.contentWrapper}>
          <ContentTableList active={active} title={'TABLE OF CONTENTS'} />
        </div>
        <div className={styles.itemWrapper}>{listOfComponents}</div>
      </div>
    </Wrapper>
  );
};
