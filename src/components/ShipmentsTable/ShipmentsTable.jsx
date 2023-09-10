import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import Spinner from "components/Spinner/Spinner";
import { TableHeader } from "components/TableHeader/TableHeader";
import { TableRow } from "components/TableRow/TableRow";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShipments } from "redux/shipments/operations";
import { getIsLoading} from "redux/shipments/selectors";

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
        <table>
        <TableHeader />
        <TableRow  />
        </table>
        {isLoading && <Spinner/>}
        {!isLoading && <LoadMoreBtn  page={page} onNextPage={onNextPage} onPrevPage={onPrevPage}/>}
        </>)
    
}
