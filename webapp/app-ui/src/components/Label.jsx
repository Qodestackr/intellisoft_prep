import React from 'react';

//component
const Label = ({ className, children, ...rest }) => {

    if (isEmpty && nullable) return null;

    return <label className={classes('label', { 'label-empty': isEmpty }, className)} {...rest}>{children}</label>;
};

//display name
Label.displayName = '@Label';

//default props
Label.defaultProps = {};

//container
const mLabel = React.memo(Label);

//export
export default mLabel;