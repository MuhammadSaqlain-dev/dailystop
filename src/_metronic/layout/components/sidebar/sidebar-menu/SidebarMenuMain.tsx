import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        fontIcon="bi-app-indicator"
      />
      <SidebarMenuItem
        to="/store-management/stores"
        icon="shop"
        title="Store list"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/customer-management/customers"
        icon="basket-ok"
        title="Customer list"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/product-import"
        icon="basket-ok"
        title="Product import"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/search-upc"
        icon="parcel-tracking"
        title="UPC"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/promotion-management/promotions"
        icon="delivery-3"
        title="Promotions"
        fontIcon="bi-layers"
      />
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Reports
          </span>
        </div>
      </div>
      <SidebarMenuItemWithSub to="/reports" title="Reports" hasBullet={true}>
        <SidebarMenuItem to="/reports/orders" title="Orders" hasBullet={true} />
        <SidebarMenuItem
          to="/reports/products"
          title="Products"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/reports/top-categories"
          title="Top Categories"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/reports/close-day"
          title="Close Day"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/reports/total-sales"
          title="Total Sales"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to="/inventory"
        title="Inventory"
        icon="element-7"
        fontIcon="bi-layers"
      >
        <SidebarMenuItem
          to="/inventory/warehouses"
          title="Warehouses"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/inventory/transfer-inventory"
          title="Report tarnsfer inventory"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
    </>
  );
};

export { SidebarMenuMain };
