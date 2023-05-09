import { Route, Routes, useLocation } from "react-router-dom";

import React from "react";
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
import Token from "./Pages/Token.jsx";
import CheckoutPage from "./Pages/Payments/CheckoutPage.jsx";
import { SuccessPage } from "./Pages/Payments/SuccessPage.jsx";
import { FailPage } from "./Pages/Payments/FailPage.jsx";
import { AdminLogin } from "./Pages/AdminLogin.jsx";
import { AdminEntry } from "./Pages/Admin/AdminEntry.jsx";
import { AdminMain } from "./Pages/Admin/AdminMain.jsx";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

export default function Router() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes("/admin") ? "" : <Header />}
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
          element={<ProfilePerformer />}></Route>
        <Route path="/mypage/:id/edit" element={<ProfileEdit />}></Route>
        {/* 회원 조회 페이지 */}
        <Route path="/members/:id" element={<Members />}></Route>

        {/* 티케팅게시판 */}
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/tickets/create" element={<TicketsCreate />}></Route>
        <Route path="/tickets/:id" element={<TicketsDetail />}></Route>
        <Route path="/tickets/:id/edit" element={<TicketsEdit />}></Route>

        {/* 결제 관련 */}
        <Route path="/tickets/:id/checkout" element={<CheckoutPage />}></Route>
        <Route path="/success" element={<SuccessPage />}></Route>
        <Route path="/fail" element={<FailPage />}></Route>

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
        <Route path="/board/advertise" element={<AdvertiseBoardList />}></Route>
        <Route path="/board/advertise/create" element={<BoardCreate />}></Route>
        <Route path="/board/advertise/:id" element={<Board />}></Route>
        <Route path="/board/advertise/:id/edit" element={<BoardEdit />}></Route>
        {/* 후기게시판 */}
        <Route path="/board/review" element={<ReviewBoardList />}></Route>
        <Route path="/board/review/create" element={<BoardCreate />}></Route>
        <Route path="/board/review/:id" element={<Board />}></Route>
        <Route path="/board/review/:id/edit" element={<BoardEdit />}></Route>
        {/* admin */}
        <Route path="/login/admin" element={<AdminLogin />}></Route>
        <Route path="/admin" element={<AdminEntry />}></Route>
        <Route path="/admin/main" element={<AdminMain />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {pathname.includes("/admin") ? "" : <Footer />}
    </>
  );
}
