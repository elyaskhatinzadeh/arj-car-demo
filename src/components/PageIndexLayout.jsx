import React, {useEffect, useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {rendition} from "../services/i18n";
import useApi from "../services/useApi";
import {SearchIcon} from "./icon/SearchIcon";
import PageLoading from "./PageLoading";

function PageIndexLayout({children, method}) {

    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1)
    const [data, setData] = useState([])
    const {data: items, loading, fetchData} = useApi()

    useEffect(() => {
        var sep = window.location.search.includes("?")? "&" : "?"
        fetchData(`${method}${sep}page=${page}&search=${search}`)
    }, [page, search]);

    useEffect(() => {
        if (items && items.data) {
            console.log("LOADED")
            items.data.map(i => setData(prevState => [...prevState, i]))
        }
    }, [items])

    useEffect(() => {
        setData([])
    }, [search])


    return (
        <>
            <Input
                value={search}
                onValueChange={setSearch}
                startContent={<SearchIcon />}
                size="sm" />
            {(loading && data.length === 0)? <PageLoading /> : children({data, loading, search, page, total})}
            { items && (items.last_page !== 1) && (items.current_page !== items.last_page) && <Button
                color={"primary"}
                isLoading={loading}
                onClick={() => setPage((prevState) => ++prevState)} >
                { rendition('loadMore') }
            </Button>}
        </>
    )
}


export default PageIndexLayout;