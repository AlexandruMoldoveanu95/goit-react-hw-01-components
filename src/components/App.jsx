import { Profile } from "./Profile/Profile";
import user from './JSONfolder/user.json';
import data from './JSONfolder/data.json';
import Statistics from "./Statistick/Statistics";
import {FriendList} from "./FriendList/FriendList.js";
import friends from "./JSONfolder/friends.json";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory";
import transactions from "./JSONfolder/transactions.json";

export const App = () => {
  return (
    <div style={stylizare} > 
    <SectionTitle title={'User Profile'} />
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />
      
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <SectionTitle title={'Friend List'} />
    <FriendList friends={friends} />
    <SectionTitle title={'Transactions'} />
    <TransactionHistory items={transactions} />
    </div>
  );
};
const SectionTitle = ({ title }) => {
  return (
    <h2 style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>
      {title}
    </h2>
  );
};
const stylizare = {
  backgroundColor: "#087CA7",
}
