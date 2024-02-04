"use client";
import { FaBars,FaSearch } from 'react-icons/fa';

import Image from 'next/image';
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
export default function Header (){
    return (<div className="header-container">
      
    <div className="logo-container">
       <img src="https://www.testvalley.kr/logo/logo-new.svg" width={100} height={100}/>
    
    <FaBars className='drawerIcon'/>
    <div className="drawer-title">
    카테고리
          </div>
    </div>
    

<div class="search-container relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-100 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:border-gray-600  dark:text-black  " placeholder="Search" />
    </div>


    
    <div className="additional-content">
    <img src="https://www.testvalley.kr/common/home-event.svg" width={28} height={28}/>
    
    <div className="divider"></div>
      <p className="text">로그인 / 회원가입</p>
    </div>
  </div>)
    
}





