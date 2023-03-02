import React from 'react'

const Checkbox = React.forwardRef((props, ref) => {

    return (
        <div ref={innerRef} className={classes('inline-flex flex-row items-center gap-1', className)}>

            {/* checkbox */}
            <Input
                ref={inputRef}
                id={id || name}
                name={name}
                type="checkbox"
                className={classes({ 'input-invalid': invalid }, inputClass)}
                {...rest}
            />

            {/* children (label) */}
            <Label className={labelClass} htmlFor={id || name}>{children}</Label>
        </div>
    )
})

//display name
Checkbox.displayName = '@Checkbox';

//default props
Checkbox.defaultProps = {};

//container
const mCheckbox = React.memo(Checkbox);

//export
export default mCheckbox;