import {Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import toast from "react-hot-toast";
import {ItemCounter} from "./icon/ItemCounter";
import {IconWrapper} from "./icon/IconWrapper";

function ListBox2Component({data, onAction, title=null}) {

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <div className="w-full  rounded-small">
            <Listbox
                aria-label="User Menu"
                // onAction={(key) => onAction(key)}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible  rounded-medium"
                itemClasses={{
                    base: "first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >
                <ListboxSection title={title}>
                    {data?.map((i, index) => (
                        <ListboxItem
                            onClick={() => onAction(i, index)}
                            key={i.id}
                            endContent={<ItemCounter number={i.number} />}
                            startContent={
                                <IconWrapper className="bg-primary/10 text-primary">
                                    {i.icon}
                                </IconWrapper>
                            }
                        >
                            {i.title}
                        </ListboxItem>
                    )) }
                </ListboxSection>


            </Listbox>
        </div>
    )
}


export default ListBox2Component;