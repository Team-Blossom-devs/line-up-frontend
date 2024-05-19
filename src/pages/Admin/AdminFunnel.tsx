import React, { createContext, useState } from 'react'
import Login from "./Login";
import { Admin } from "./Admin";

export interface ContextType {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>
  organId: string;
  setOrganId: React.Dispatch<React.SetStateAction<string>>;
}

export const AdminFunnel = () => {

  const [role, setRole] = useState("");
  const [organId, setOrganId] = useState("");
  const roleContext = createContext<ContextType | null>(null);

  return (
    <roleContext.Provider value={{ role, setRole, organId, setOrganId }}>
      {
        // 로그인하기 전 localStorage가 비었음
        !localStorage.getItem('token') ?
          (
            <Login roleContext={roleContext} />
          ) :
          // 관리자 로그인 시 isAdmin이 True로 변함
          (
            <Admin roleContext={roleContext} />
          )
      }
    </roleContext.Provider>
  )
}