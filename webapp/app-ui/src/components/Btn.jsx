import React from 'react';

const Btn = React.forwardRef((props, ref) => {
    const { type, children } = props

    return (
        <button type={type}>{children}</button>
    )
})

Btn.displayName = '@Btn';

Btn.defaultProps = {};

const mBtn = React.memo(Btn);

export default mBtn;