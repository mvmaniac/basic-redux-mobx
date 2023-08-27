import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { logIn } from './actions/user';
import { addPost } from './actions/post';

import userSlice from './reducers/user';

const priceSelector = (state) => state.userReducer.prices;
const sumPriceSelector = createSelector(priceSelector, (prices) =>
  prices.reduce((a, c) => a + c, 0),
);

// 아래처럼 커링을 사용해서 dispatch 의존성을 없애고 순수함수로 만들 수 있음
const outside = (dispatch) => () => {
  dispatch(
    logIn({
      id: 'dev',
      password: '비밀번호',
    }),
  );
};

function App() {
  // 왠만해서는 useSelector를 통해 반환되는 값은 객체가 아닌 원시값으로 풀어서 반환하는게 좋음
  // const email = useSelector((state) => state.userReducer.email);
  // const password = useSelector((state) => state.userReducer.password);
  //
  // 하지만 성능에 크게 문제가 없다면 객체로 반환해서 구조분해할당으로 받아도 됨
  // const {email, password} = useSelector((state) => state.userReducer);
  // 성능 최적화는 체감이 될 때 해도 늦지 않는다...
  const user = useSelector((state) => state.userReducer);

  // const prices = useSelector((state) => state.userReducer.prices);
  const totalPrices = useSelector(sumPriceSelector);

  const dispatch = useDispatch();

  // 한 컴포넌트에서만 쓰이는 비동기의 경우(다른 컴포넌트에 영향을 주지 않는 경우)에는
  // 리덕스로 처리하기보다는 해당 컴포넌트에 바로 요청하는 것도 하나의 방법임
  // const onClick = useCallback(async () => {
  //   try {
  //     const response = await axios.post('/login');
  //   } catch (error) {
  //   } finally {
  //   }
  // });

  // const onClick = useCallback(outside(dispatch), []);
  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: 'dev',
        password: '비밀번호',
      }),
    );
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, [dispatch]);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, [dispatch]);

  const nickname = user.data ? (
    <div>{user.data.nickname}</div>
  ) : (
    <div>로그인 해주세요.</div>
  );

  // useMemo 사용하면 연산은 1번만 하지만 리렌더링시 prices 값이 변했는지 확인하는 계속 함
  // 연산은 캐시가 되었지만 prices 값 변화여부는 계속 체크하는 트레이드 오프가 있음
  // 이럴 때 사용할 수 있는 방법이 createSelector (정식명칭은 reselect)
  // const totalPrices = useMemo(() => {
  //   console.log('memo');
  //   return prices.reduce((a, c) => a + c, 0); // 100만번 연산이라 가정
  // }, [prices]);

  return (
    <div>
      {user.isLoggingIn ? <div>로그인 중</div> : nickname}
      {!user.data ? (
        <button type="button" onClick={onClick}>
          로그인
        </button>
      ) : (
        <button type="button" onClick={onLogout}>
          로그아웃
        </button>
      )}
      <button type="button" onClick={onAddPost}>
        게시글 작성
      </button>
      <div>
        <b>{totalPrices} 원</b>
      </div>
    </div>
  );
}

export default App;
