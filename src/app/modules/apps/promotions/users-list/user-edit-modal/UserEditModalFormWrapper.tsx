import { useQuery } from "react-query";
import { UserEditModalForm } from "./UserEditModalForm";
import { isNotEmpty, QUERIES } from "../../../../../../_metronic/helpers";
import { useListView } from "../core/ListViewProvider";
import { getUserById } from "../core/_requests";
import { initialUser } from "../core/_models"; // Import initialUser

const UserEditModalFormWrapper = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUserById(itemIdForUpdate);
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined);
        console.error(err);
      },
    }
  );

  const userToEdit = { ...initialUser, ...user };

  if (!itemIdForUpdate) {
    return <UserEditModalForm isUserLoading={isLoading} user={initialUser} />;
  }

  if (!isLoading && !error && user) {
    return <UserEditModalForm isUserLoading={isLoading} user={userToEdit} />;
  }

  return null;
};

export { UserEditModalFormWrapper };
