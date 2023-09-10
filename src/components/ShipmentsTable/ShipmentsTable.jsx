import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import Spinner from "components/Spinner/Spinner";
import { TableHeader } from "components/TableHeader/TableHeader";
import { TableRow } from "components/TableRow/TableRow";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShipments } from "redux/shipments/operations";
import { getIsLoading } from "redux/shipments/selectors";
import css from './ShipmentsTable.module.css'

export default function ShipmentsTable() {
    const [page, setPage] = useState(1);
     const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(getAllShipments(page));
        
}, [dispatch, page]);

    const onNextPage = () => {
        setPage(prev=>prev+1)
    }

    const onPrevPage = () => {
        setPage(prev=>prev-1)
    }

    return (
        <>
        <div className={css.container}>
        <table className={css.table}>
        <TableHeader />
        <TableRow  />
        </table></div>
        {isLoading && <Spinner/>}
        {!isLoading && <LoadMoreBtn  page={page} onNextPage={onNextPage} onPrevPage={onPrevPage}/>}
        </>)
    
}
