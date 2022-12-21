import './App.css';
import { useGetUsersQuery } from './features/users/GetUsers.generated';

function App() {
  const { data, isLoading, isFetching,error } = useGetUsersQuery()

  if(isLoading){
    console.log("loading")
  }
  if(isFetching){
    console.log("fetching")
  }
  if(error){
    console.log(error)
  }
  if(data){
  console.log(data.users)
  }
  return (
    <div className="App">
      <ul>
      {data?.users?.map((user)=><li key={user?._id}>{user?._id+","+user?.email+","+user?.name}</li>)}</ul>
    </div>
  );
}

export default App;
