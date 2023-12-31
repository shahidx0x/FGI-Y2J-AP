import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import NavbarHeader from "./components/Navbar";
import SideNavigation from "./components/Sidebar";
import AddAdmin from "./pages/Dashbord/Admin/AddAdmin";
import AdminTable from "./pages/Dashbord/Admin/AdminTable";
import EditAdmin from "./pages/Dashbord/Admin/EditAdmin";
import Inventory from "./pages/Dashbord/Inventory/Inventory";
import Notification from "./pages/Dashbord/Notification/Notification";
import Order from "./pages/Dashbord/Orders/Order";
import Transaction from "./pages/Dashbord/Transaction/Transaction";
import Login from "./pages/Login";
import { CustomProvider, Message } from "rsuite";

import { useSelector } from "react-redux";
import UniteType from "./pages/Dashbord/UniteType/UniteType";
import { OrderDetails } from "./pages/Dashbord/Orders/OrderDetails";
import TrackOrder from "./pages/Dashbord/Orders/TrackOrder";
import Invoice from "./pages/Dashbord/Orders/Invoice";
import SingleUserOrderList from "./pages/Dashbord/Orders/SingleUserOrderList";
import Settings from "./pages/Dashbord/Settings/Settings";

// Lazy load the components
const AddCategory = lazy(() => import("./pages/Dashbord/Category/AddCategory"));
const AllCategory = lazy(() => import("./pages/Dashbord/Category/AllCategory"));
const EditCategory = lazy(() =>
  import("./pages/Dashbord/Category/EditCategory")
);
const AddCompany = lazy(() => import("./pages/Dashbord/Company/AddCompany"));
const AllCompany = lazy(() => import("./pages/Dashbord/Company/AllCompany"));
const EditCompany = lazy(() => import("./pages/Dashbord/Company/EditCompany"));
const MainDashbord = lazy(() => import("./pages/Dashbord/MainDashbord"));
const AddProduct = lazy(() => import("./pages/Dashbord/Products/AddProduct"));
const EditProduct = lazy(() => import("./pages/Dashbord/Products/EditProduct"));
const ProductList = lazy(() => import("./pages/Dashbord/Products/ListProduct"));
const EditSubCategory = lazy(() =>
  import("./pages/Dashbord/Subcategory/SubCategoryEdit")
);
const AddSubCategory = lazy(() =>
  import("./pages/Dashbord/Subcategory/SubcategoryAdd")
);
const SubcategoryList = lazy(() =>
  import("./pages/Dashbord/Subcategory/SubcategoryList")
);
const UserInfoEdit = lazy(() => import("./pages/Dashbord/Users/UserInfoEdit"));
const UserTable = lazy(() => import("./pages/Dashbord/Users/UserTable"));

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashbord",
      element: <Dashbord />,
      children: [
        {
          path: "status",
          element: (
            <Suspense fallback={<Loading />}>
              <MainDashbord />
            </Suspense>
          ),
        },
        {
          path: "user-table",
          element: (
            <Suspense fallback={<Loading />}>
              <UserTable />
            </Suspense>
          ),
        },
        {
          path: "update-admin-info",
          element: (
            <Suspense fallback={<Loading />}>
              <EditAdmin />
            </Suspense>
          ),
        },
        {
          path: "notification-list",
          element: (
            <Suspense fallback={<Loading />}>
              <Notification />
            </Suspense>
          ),
        },
        {
          path: "add-new-admin",
          element: (
            <Suspense fallback={<Loading />}>
              <AddAdmin />
            </Suspense>
          ),
        },
        {
          path: "admin-table",
          element: (
            <Suspense fallback={<Loading />}>
              <AdminTable />
            </Suspense>
          ),
        },
        {
          path: "user-table/edit",
          element: (
            <Suspense fallback={<Loading />}>
              <UserInfoEdit />
            </Suspense>
          ),
        },
        {
          path: "all-company/edit",
          element: (
            <Suspense fallback={<Loading />}>
              <EditCompany />
            </Suspense>
          ),
        },
        {
          path: "company/add",
          element: (
            <Suspense fallback={<Loading />}>
              <AddCompany />
            </Suspense>
          ),
        },
        {
          path: "all-company",
          element: (
            <Suspense fallback={<Loading />}>
              <AllCompany />
            </Suspense>
          ),
        },
        {
          path: "category/all",
          element: (
            <Suspense fallback={<Loading />}>
              <AllCategory />
            </Suspense>
          ),
        },
        {
          path: "category/add",
          element: (
            <Suspense fallback={<Loading />}>
              <AddCategory />
            </Suspense>
          ),
        },
        {
          path: "category/edit",
          element: (
            <Suspense fallback={<Loading />}>
              <EditCategory />
            </Suspense>
          ),
        },
        {
          path: "subcategory/list/:category_name/:category_id",
          element: (
            <Suspense fallback={<Loading />}>
              <SubcategoryList />
            </Suspense>
          ),
        },
        {
          path: "subcategory/:brand_id/:category_id/add",
          element: (
            <Suspense fallback={<Loading />}>
              <AddSubCategory />
            </Suspense>
          ),
        },
        {
          path: "subcategory/edit",
          element: (
            <Suspense fallback={<Loading />}>
              <EditSubCategory />
            </Suspense>
          ),
        },
        {
          path: "product/add",
          element: (
            <Suspense fallback={<Loading />}>
              <AddProduct />
            </Suspense>
          ),
        },
        {
          path: "product/list",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductList />
            </Suspense>
          ),
        },
        {
          path: "product/edit",
          element: (
            <Suspense fallback={<Loading />}>
              <EditProduct />
            </Suspense>
          ),
        },
        {
          path: "manage/orders",
          element: (
            <Suspense fallback={<Loading />}>
              <Order />
            </Suspense>
          ),
        },
        {
          path: "manage/transaction",
          element: (
            <Suspense fallback={<Loading />}>
              <Transaction />
            </Suspense>
          ),
        },
        {
          path: "manage/unit-type",
          element: (
            <Suspense fallback={<Loading />}>
              <UniteType />
            </Suspense>
          ),
        },
        {
          path: "manage/inventory",
          element: (
            <Suspense fallback={<Loading />}>
              <Inventory />
            </Suspense>
          ),
        },
        {
          path: "order/details/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <OrderDetails />
            </Suspense>
          ),
        },
        {
          path: "order/details/track/order/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <TrackOrder />
            </Suspense>
          ),
        },
        {
          path: "order/details/invoice/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <Invoice />
            </Suspense>
          ),
        },
        {
          path: "order/details/:user/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <SingleUserOrderList />
            </Suspense>
          ),
        },
        {
          path: "settings",
          element: (
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}
function Root() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function Dashbord() {
  const settings = useSelector((state) => state.settings);

  const containerStyle = {
    display: "flex",
    height: "100vh",
  };

  const scrollableStyle = {
    flex: "1",
    overflowY: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  return (
    <CustomProvider theme={settings.theme || "light"}>
      {settings.theme === "dark" && (
        <style>
          {`
          .RichTextEditor__root___2QXK- {
            background: black;
            border: 1px solid #ddd;
            border-radius: 3px;
            font-family: Georgia, serif;
            font-size: 14px;
            color: white;
          }
        `}
        </style>
      )}
      <Message className={settings.maintain ? 'flex font-bold' : 'hidden font-bold'} showIcon type="warning">
        warning apps is in maintainance mode 
      </Message>
      <NavbarHeader />
      <div style={containerStyle}>
        <div
          style={{
            flex: "0 0 auto",
            height: "100%",
          }}
        >
          <SideNavigation />
        </div>
        <div style={scrollableStyle} className="main-content ">
          <style>
            {`
              .main-content::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <Outlet />
        </div>
      </div>
    </CustomProvider>
  );
}

export default App;
