import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import NoPage from "./Pages/NoPage/NoPage";
import Store from "./Pages/Store/Store";
import Mac from "./Pages/NavMac/NavMac";
import IPad from "./Pages/NavIPad/NavIPad";
import IPhone from "./Pages/iPhone/iPhone";
// import IPhones from "./Pages/iPhone/iPhones";
import Watch from "./Pages/Watch/Watch";
import AirPods from "./Pages/AirPods/AirPods";
import TVAndHome from "./Pages/TVAndHome/TVAndHome";
import OnlyOnApple from "./Pages/OnlyOnApple/OnlyOnApple";
import Accessories from "./Pages/Accessories/Accessories";
import Support from "./Pages/Support/Support";

const ManiRouter = () =>{
    return (
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Store" element={<Store />} />
                    <Route path="/Mac" element={<Mac />} />
                    <Route path="/iPad" element={<IPad />} />
                    <Route path="/iPhone" element={<IPhone />} />
                    {/* <Route path="/iPhone" element={<IPhones />} /> */}
                    <Route path="/Watch" element={<Watch />} />
                    <Route path="/AirPods" element={<AirPods />} />
                    <Route path="/TV & Home" element={<TVAndHome />} />
                    <Route path="/Only on Apple" element={<OnlyOnApple />} />
                    <Route path="/Accessories" element={<Accessories />} />
                    <Route path="/Support" element={<Support />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </React.Fragment>
    );
}

export default ManiRouter;
