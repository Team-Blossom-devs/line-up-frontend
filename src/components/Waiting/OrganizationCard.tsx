import React from 'react'
import dummyImg from "../../assets/images/주점_메뉴.jpg";
import { Organization } from "@/types/Organization.type";

const OrganizationCard = (organization: Organization) => {
  return (
    <div>
      <img src={dummyImg} />
      <div>
        <p className="font-bold">{organization.name}</p>
        <p className="text-sm text-gray-500">{organization.location}</p>
        <p className="text-sm text-gray-500">{organization.tableCount} 테이블</p>
      </div>
    </div>
  )
}

export default OrganizationCard