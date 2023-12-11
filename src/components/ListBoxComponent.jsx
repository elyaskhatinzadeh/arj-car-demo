import {Avatar} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";

function ListBoxComponent({data, state, onAction}) {

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <div className="w-full px-1 py-2 rounded-small">
            <h1>{state}</h1>
            <Listbox
                label="Assigned to"
                variant="flat"
            >
                {data?.map((item, index) => (
                    <ListboxItem
                        onClick={() => onAction(item, index)}
                        key={item.id}
                        textValue={item.title}>
                        <div className="flex gap-2 items-center">
                            <Avatar alt={item.title} className="flex-shrink-0" size="md" src={item.avatar} />
                            <div className="flex flex-col">
                                <span className="text-small">{item.title}</span>
                                <span className="text-tiny text-default-400">{item.description}</span>
                            </div>
                        </div>
                    </ListboxItem>
                ))}
            </Listbox>
        </div>
    )
}


export default ListBoxComponent;