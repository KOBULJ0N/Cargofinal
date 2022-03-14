import React from 'react';
import { AnchorContainer, Scroll } from './style';

export const Anchor = ({href, mt, mb, mtm, mbm}) => {
  return (
    <AnchorContainer href={href} mt={mt} mb={mb} mtm={mtm} mbm={mbm}>
      <Scroll />
    </AnchorContainer>
  );
};
export default Anchor;
