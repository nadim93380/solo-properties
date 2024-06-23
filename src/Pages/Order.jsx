import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../Utility/LocalStorage";
import OrderList from "../components/OrderList";



const Order = () => {
    const allData = useLoaderData()
    

    const orderIdStorage = getFromLocalStorage()

    const targetProperties = allData.filter(tProperty => orderIdStorage.includes(tProperty.id))

    return (
        <div id="order" className="py-24 w-11/12 md:w-10/12 mx-auto">
            <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="text-xl font-semibold border-b-2 pb-3">Order History</h2>
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    {
                        targetProperties.map(property => <OrderList key={property.id} property={property}></OrderList>)
                    }
                    
                    
                </ul>
                <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">Back
                        <a href="#order" className="sr-only sm:not-sr-only"> to top</a >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;