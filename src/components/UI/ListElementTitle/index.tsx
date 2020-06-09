import * as React from 'react';

type Props = {
  title: string,
  atUrl?: string,
  atTitle?: string,
};

const ListElementTitle: React.FunctionComponent<Props> = ({ title, atTitle, atUrl }: Props) => (
  <>
    {title}
    {atTitle ? (
      <>
        {' @ '}
        <a href={atUrl} target="_blank" rel="noreferrer">
          {atTitle}
        </a>
      </>
    ) : null}
  </>
);

export default ListElementTitle;
