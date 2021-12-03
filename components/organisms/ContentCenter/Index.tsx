import { ReactChild } from 'react';

interface ContentCenterProps {
  children: ReactChild;
}

export default function ContentCenter(props: ContentCenterProps) {
  const { children } = props;

  return <div>{children}</div>;
}
