import React from 'react';

import providers from './providers';

const Provider = (props: any) =>
  providers.reduceRight(
    (children, Parent) => <Parent>{children}</Parent>,
    props.children
  );

export default Provider;
