"use client";
export function UserItem({ name }) {
  return (
    <li
      onClick={() => {
        console.log("user clicked", name);
      }}
      className="pl-3"
    >
      {name}
    </li>
  );
}

export default UserItem;
