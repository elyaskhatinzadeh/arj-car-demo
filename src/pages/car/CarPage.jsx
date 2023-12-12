import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    cn,
    Divider,
    getKeyValue,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";

import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {cars, columns, fields_one} from "../../data"


function CarPage() {

    const [rows, setRows] = useState(cars)
    const [openForm, setOpenForm] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const [formData, setFormData] = useState({})
    const [page, setPage] = useState(1)
    const [filteredItems, setFilteredItems] = useState([])

    const rowsPerPage = 10;
    const pages = Math.ceil(rows.length / rowsPerPage);


    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return rows.slice(start, end);
    }, [page, rows]);


    const onChange = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onRowAction = (key) => {
        const foundItem = rows.find(item => item.id === key);
        setFormData(foundItem)
        setSelectedRow(key)
        setOpenForm(true)
    }


    const onOpenForm = () => {
        setSelectedRow(null)
        setOpenForm(prevState => !prevState)
        setFormData({id: rows.length + 1, user: 'ادمین'})
    }

    const onCancel = () => {
        setFormData({})
        setSelectedRow(null)
        setOpenForm(false)
    }

    const onAdd = () => {
        setRows((prevState) => ([...prevState, formData]))
        setFormData({})
        setSelectedRow(null)
        setOpenForm(false)
    }

    const onEdit = (idToUpdate, updatedFormData) => {
        setRows((prevRows) => {
            return prevRows.map((row) => {
                if ( parseInt(row.id) === parseInt(idToUpdate)) {
                    return updatedFormData;
                }
                return row;
            });
        });
        setFormData({})
        setOpenForm(null)
        setSelectedRow(null)
    }

    const onDelete = (idToDelete) => {
        const confirmDelete = window.confirm('آیا از حذف اطمینان دارید؟')
        if (confirmDelete){
            setRows((prevState) => {
                console.log("Delete", idToDelete)
                return prevState.filter((row) => parseInt(row.id) !== parseInt(idToDelete));
            });
            setFormData({})
            setOpenForm(null)
            setSelectedRow(null)
        }
    }

    const classNames = React.useMemo(
        () => ({
            wrapper: ["shadow-none"],
        }),
        [],
    );



    useEffect(() => {
        setFilteredItems(rows)
    }, [rows]);



    const handleSearch = (query) => {
        const lowercaseQuery = query.toLowerCase();
        const filtered = items.filter(item => {
            // Check if the item contains the query in any of its columns
            for (const key in item) {
                if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
                    if (item[key].toLowerCase().includes(lowercaseQuery)) {
                        return true;
                    }
                }
            }
            return false;
        })
        setFilteredItems(filtered)
    }




    return (
        <div className={"max-w-6xl mx-auto p-6"}>

            <span className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5"/>

            <Card>
                <CardHeader className="flex justify-between">
                    <h1 className="text-2xl p-2">وسایط نقلیه</h1>
                    <div className="flex gap-3 items-center">
                        <Button
                            onPress={onOpenForm}
                            color="primary">ایجاد</Button>
                        <Input
                            className="max-w-xs"
                            placeholder="جستجو ..."
                            endContent={<MagnifyingGlassIcon className="w-5 h-5" />}
                            name="search"
                            value={formData.search}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                </CardHeader>

                <CardBody>


                    {openForm && (<form action="" className="block w-full">
                                <div className="grid grid-cols-12 gap-3">
                                    {fields_one.map((i, index) => (
                                        <>
                                            {!i.type && <Input
                                                readOnly={i.readOnly ?? false}
                                                className={cn(`col-span-${i.size ?? 2}`)}
                                                label={i.label}
                                                name={i.key}
                                                value={formData[i.key]}
                                                onChange={onChange}
                                            />}

                                            {i.type === "select" && <Select
                                                data={i.data}
                                                className={cn(`text-right col-span-${i.size ?? 2}`)}
                                                label={i.label}
                                                name={i.key}
                                                selectedKeys={[formData[i.key]]}
                                                onChange={onChange}
                                            />}
                                        </>
                                    ))}
                                </div>


                                <div className="flex mt-4 justify-between">
                                    <div className="flex gap-2">
                                        {!selectedRow && <Button onPress={onAdd} color="primary" size="sm">ثبت</Button>}
                                        {selectedRow &&
                                            <Button onPress={() => onEdit(selectedRow, formData)} color="success"
                                                    size="sm">ثبت</Button>}
                                        <Button onPress={onCancel} color="warning" size="sm">لغو</Button>
                                    </div>
                                    <div>
                                        {selectedRow &&
                                            <Button onPress={() => onDelete(selectedRow) } color="danger" size="sm">حذف</Button>}
                                    </div>
                                </div>
                            </form>)}


                    <Divider className="my-4" />


                    <Table
                        color="success"
                        classNames={classNames}
                        selectionMode="single"
                        onRowAction={(key) => onRowAction(key)}
                        aria-label="Example table with dynamic content">
                        <TableHeader className="text-center" columns={columns}>
                            {(column) => <TableColumn className="text-center"  key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={filteredItems}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell className="text-right hover:cursor-pointer" >{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>

        </div>
    );
}

export default CarPage;
