import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { Home } from '../../pages/HomePage/components/Home';
import { Expert } from '../../pages/Expert';
import { Discover } from '../../pages/Discover';
import { Community } from '../../pages/Community';
import { PageNotFound } from '../../pages/PagesNotFound';
import { Conversation } from '../../pages/Conversation';
import { ListConversation } from '../../pages/Conversation/components/ListConversation/ListConversation';
import { InCall } from '../../pages/Conversation/components/InCall/InCall';
import Explorer from '../../pages/Conversation/components/Explorer/Explorer';
import WebRTC from '../../pages/Conversation/components/ListConversation/WebRTC';
const AppRouting = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/register' element={<Register />} /> */}
      <Route exact path='/' element={<HomePage />}>
        <Route path='' element={<Home />} />
      </Route>
      <Route exact path='/experts' element={<Expert />}></Route>
      <Route exact path='/discover' element={<Discover />}></Route>
      <Route exact path='/community' element={<Community />}></Route>
      <Route exact path='/friends' element={<Conversation />}>
        <Route path='' element={<ListConversation />} />
      </Route>
      <Route exact path='/chat' element={<Conversation />}>
        <Route
          path=''
          element={
            <WebRTC
              age={21}
              name={'Nguyễn Văn A'}
              distance={'10km'}
              location={'Hanoi'}
              imageUrl={'https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel-900x900.jpg'}
            />
          }
        />
      </Route>
      <Route path='call' element={<InCall />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/callTest' element={<Explorer />} />
    </Routes>
  );
};
export default AppRouting;