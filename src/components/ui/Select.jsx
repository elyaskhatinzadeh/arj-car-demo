import {Select as NextSelect, SelectItem} from "@nextui-org/react";

const Select = (props) => {
    return (
        <>
            <NextSelect size="sm" variant="faded" {...props}>
                {props.data && props.data.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                    </SelectItem>
                ))}
            </NextSelect>
        </>
    );
};

export default Select;
