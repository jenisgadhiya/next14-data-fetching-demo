export async function Server() {
  const randomBool = Math.random() > 0.5;
  const res = await fetch(
    `https://dummyjson.com/${randomBool ? "users" : "posts"}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const users = randomBool ? data?.users : data?.posts;
  const title = randomBool ? "Users" : "Posts";
  console.log("Api called", title);
  return (
    <div>
      <h1 className="text-2xl font-bold m-3">{title} (SSG)</h1>
      <ul className="list-disc">
        {users.length &&
          users.map((user) => (
            <li className="pl-3" key={user.id}>
              {randomBool ? user.firstName : user?.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Server;
