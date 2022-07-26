import React from 'react'
import {
    Route,
    Routes,
    Navigate,
    useLocation,
} from 'react-router-dom'
import Homes from "./Homes"
import HomesHome from "./HomesHome"

export const HomesRoute = () => (
    <Routes>
        <Route index element={<Homes />} />
        <Route path=":id" element={<HomesHome />} />
        {/* <Route path=":storeCode" element={<StoresStore />}>
            <Route index element={<StoresDashboard />} />
            <Route path="items" element={<StoresItems />} />
            <Route path="layout" element={<StoresLayout />} />
            <Route path="shelves">
                <Route index element={<StoresShelves />} />
                <Route path=":shelfCode" element={<StoresShelf />} />
            </Route>
            <Route path="config" element={<StoresConfg />} />
            <Route path="boot_config" element={<StoresBootConfig />} />
            <Route path="hooks" element={<StoresHooks />} />
        </Route> */}
    </Routes>
)
