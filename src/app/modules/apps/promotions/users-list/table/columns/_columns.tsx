import { Column } from "react-table";
import { UserInfoCell } from "./UserInfoCell";
import { UserLastLoginCell } from "./UserLastLoginCell";
import { UserTwoStepsCell } from "./UserTwoStepsCell";
import { UserActionsCell } from "./UserActionsCell";
import { UserSelectionCell } from "./UserSelectionCell";
import { UserCustomHeader } from "./UserCustomHeader";
import { UserSelectionHeader } from "./UserSelectionHeader";
import { User } from "../../core/_models";

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: "selection",
    Cell: ({ ...props }) => (
      <UserSelectionCell id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Name"
        className="min-w-125px"
      />
    ),
    id: "name",
    Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Date Init"
        className="min-w-125px"
      />
    ),
    id: "last_login",
    Cell: ({ ...props }) => (
      <UserLastLoginCell last_login={props.data[props.row.index].last_login} />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Date End"
        className="min-w-125px"
      />
    ),
    accessor: "dateEnd",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Value"
        className="min-w-125px"
      />
    ),
    accessor: "value",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Limit"
        className="min-w-125px"
      />
    ),
    id: "two_steps",
    Cell: ({ ...props }) => (
      <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-end min-w-100px"
      />
    ),
    id: "actions",
    Cell: ({ ...props }) => (
      <UserActionsCell id={props.data[props.row.index].id} />
    ),
  },
];

export { usersColumns };
