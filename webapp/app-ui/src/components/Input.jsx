import React from 'react';

const Input = React.forwardRef(() => {
    const {
        id,
        name,
        type,
        invalid,
        themeClass,
        className,
        ...rest
    } = props;

    return (
        <input ref={ref} type={type} name={name} id={id || name} value={''} placeholder={''} {...rest} />
    )
})

Input.displayName = '@Input';

Input.defaultProps = {};

const mInput = React.memo(Input);

export default mInput;