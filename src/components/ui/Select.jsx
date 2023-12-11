import {Select as NextSelect, SelectItem} from "@nextui-org/react";

const Select = (props) => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <NextSelect size="sm" {...props}>
                {props.data && props.data.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                    </SelectItem>
                ))}
            </NextSelect>
        </div>
    );
};

export default Select;
