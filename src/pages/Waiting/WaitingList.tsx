import { getOrganList } from "@/api/organization/getOrganList"
import { Logo } from "@/components/Logo/Logo"
import OrganizationCard from "@/components/Waiting/OrganizationCard"
import { Organization } from "@/types/Organization.type"
import React, { useEffect, useRef, useState } from 'react'

const WaitingList = () => {

  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const pageNum = useRef(1);

  useEffect(() => {
    const get = async () => {
      const response = await getOrganList("", pageNum.current);
      setOrganizations(response.data.organizationDtoList)
    }
    get()
  }, [])
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <div className="grid grid-cols-2 gap-8 px-5 mt-6">
        {
          organizations.map((it) => (
            <OrganizationCard key={it.id} {...it} />
          ))
        }
      </div>
    </div>
  )
}

export default WaitingList