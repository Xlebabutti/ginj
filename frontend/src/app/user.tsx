// 'use client';

// import { useFindAllUserQuery } from '@/graphql/generated/output';

// const UserList = () => {
//     const { data, loading, error } = useFindAllUserQuery();

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <ul>
//             {data?.findAllUsers.map((user) => (
//                 <li key={user.email}>
//                     {user.displayName} ({user.username})
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default UserList;
