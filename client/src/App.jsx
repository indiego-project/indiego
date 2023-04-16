/* eslint-disable react/react-in-jsx-scope */
// 최상단에는 리액트 컴포넌트
import Home from "./Pages/Home.jsx";
import Tickets from "./Pages/Tickets/Tickets.jsx";
import TicketsDetail from "./Pages/Tickets/TicketsDetail.jsx";
import TicketsCreate from "./Pages/Tickets/TicketsCreate.jsx";
import TicketsEdit from "./Pages/Tickets/TicketsEdit.jsx";
import Search from "./Pages/Search.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import SignupPerformer from "./Pages/Signup/SignupPerformer.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import ProfilePerformer from "./Pages/Profile/ProfilePerformer.jsx";
import ProfileEdit from "./Pages/Profile/ProfileEdit.jsx";
import Members from "./Pages/Members.jsx";
import BoardList from "./Pages/Boards/Board/BoardList.jsx";
import Board from "./Pages/Boards/Board/Board.jsx";
import BoardCreate from "./Pages/Boards/Board/BoardCreate.jsx";
import BoardEdit from "./Pages/Boards/Board/BoardEdit.jsx";
import NotFound from "./Pages/NotFound.jsx";
import EmployBoardList from "./Pages/Boards/BoardType/EmployBoardList.jsx";
import RequestBoardList from "./Pages/Boards/BoardType/RequestBoardList.jsx";
import AdvertiseBoardList from "./Pages/Boards/BoardType/AdvertiseBoardList.jsx";
import ReviewBoardList from "./Pages/Boards/BoardType/ReviewBoardList.jsx";
import { PaymentFail } from "./Pages/PaymentFail.jsx";

// ticket payment popup
import TicketPayment from "./Pages/Tickets/TicketPayment.jsx";
import Token from "./Pages/Token.jsx";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
// 그다음에는 로컬 모듈
import "./App.css";
import useIsLoginStore from "./store/useIsLoginStore.js";

// 그다음에는 라이브러리
import { Route, Routes, useLocation } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

const queryClient = new QueryClient();

function App() {
  const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // console.log(setUserInfo);

  useEffect(() => {
    if (refreshToken) {
      setIsLogin(true);
      axios
        .get(`${process.env.REACT_APP_SERVER_URI}/members/reissue`, {
          headers: {
            "Content-Type": "application/json",
            // eslint-disable-next-line prettier/prettier
            "Authorization": `Bearer ${accessToken}`,
            // eslint-disable-next-line prettier/prettier
            "Refresh": refreshToken,
          },
        })
        .then((response) => {
          localStorage.setItem(
            "accessToken",
            response.headers.get("Authorization").split(" ")[1]
          );
        });
    }
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* 로그인 및 회원가입 */}
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signup/performer" element={<SignupPerformer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* 토큰페이지 */}
          <Route path="/token" element={<Token />}></Route>
          {/* 프로파일 */}
          <Route path="mypage/user/:id" element={<Profile />}></Route>
          <Route
            path="mypage/performer/:id"
            element={<ProfilePerformer />}
          ></Route>
          <Route path="/mypage/:id/edit" element={<ProfileEdit />}></Route>
          {/* 회원 조회 페이지 */}
          <Route path="/members/:id" element={<Members />}></Route>

          {/* 티케팅게시판 */}
          <Route path="/tickets" element={<Tickets />}></Route>
          <Route path="/tickets/create" element={<TicketsCreate />}></Route>
          <Route path="/tickets/:id" element={<TicketsDetail />}></Route>
          <Route path="/tickets/:id/edit" element={<TicketsEdit />}></Route>
          <Route
            path="/tickets/:id/payment"
            element={<TicketPayment />}
          ></Route>
          {/* 결제 피드백 라우팅 */}
          <Route path="/payments/fail" element={<PaymentFail />}></Route>

          {/* 공연찾기게시판 */}
          <Route path="/search" element={<Search />}></Route>

          {/* 게시판 분류 */}
          {/* 자유게시판 (게시판 홈)*/}
          <Route path="/board/free" element={<BoardList />}></Route>
          <Route path="/board/free/create" element={<BoardCreate />}></Route>
          <Route path="/board/free/:id" element={<Board />}></Route>
          <Route path="/board/free/:id/edit" element={<BoardEdit />}></Route>
          {/* 구인게시판 */}
          <Route path="/board/employ" element={<EmployBoardList />}></Route>
          <Route path="/board/employ/create" element={<BoardCreate />}></Route>
          <Route path="/board/employ/:id" element={<Board />}></Route>
          <Route path="/board/employ/:id/edit" element={<BoardEdit />}></Route>
          {/* 요청게시판 */}
          <Route path="/board/request" element={<RequestBoardList />}></Route>
          <Route path="/board/request/create" element={<BoardCreate />}></Route>
          <Route path="/board/request/:id" element={<Board />}></Route>
          <Route path="/board/request/:id/edit" element={<BoardEdit />}></Route>
          {/* 홍보게시판 */}
          <Route
            path="/board/advertise"
            element={<AdvertiseBoardList />}
          ></Route>
          <Route
            path="/board/advertise/create"
            element={<BoardCreate />}
          ></Route>
          <Route path="/board/advertise/:id" element={<Board />}></Route>
          <Route
            path="/board/advertise/:id/edit"
            element={<BoardEdit />}
          ></Route>
          {/* 후기게시판 */}
          <Route path="/board/review" element={<ReviewBoardList />}></Route>
          <Route path="/board/review/create" element={<BoardCreate />}></Route>
          <Route path="/board/review/:id" element={<Board />}></Route>
          <Route path="/board/review/:id/edit" element={<BoardEdit />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;

// axios, styled component, (RTK, zustand), tanstack-query, React Router
