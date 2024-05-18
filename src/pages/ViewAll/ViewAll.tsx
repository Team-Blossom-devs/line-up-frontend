import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header/Header'
import { Bar } from '@/components/Bar/Bar'
import { getSearch } from '@/api/search/getSearch'
import { CiSearch } from 'react-icons/ci'

interface Organization {
  id: number
  name: string
  location: string
  tableCount: number
  openTime: string
  closeTime: string
}

export const ViewAll = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [organizations, setOrganizations] = useState<Organization[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSearch(searchTerm, pageNum)
        const searchOrganizations = response.data.organizationDtoList.filter((org: Organization) =>
          org.name.includes(searchTerm)
        )
        setOrganizations(searchOrganizations)
        setTotalPages(response.data.totalPages)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [searchTerm, pageNum])

  const handleClick = (id: number) => {
    navigate(`/waiting/${id}`)
  }

  const pagination = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPageNum(i)}
          className={`mx-1 px-3 py-1 ${pageNum === i ? 'bg-icon-color text-white rounded-lg' : 'text-icon-color'}`}
        >
          {i}
        </button>
      )
    }
    return pages
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="my-2 flex border-gray-100 rounded-md border-2  text-gray-400 px-3 py-1 md:py-2 gap-2">
          <CiSearch size={22} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none"
            placeholder="주점을 검색해주세요"
          />
        </div>
        <div className="my-8 text-icon-color text-lg font-bold">주점 전체보기</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer text-left">
          {organizations.map((org) => (
            <Bar
              key={org.id}
              name={org.name}
              location={org.location}
              time={`${org.openTime} - ${org.closeTime}`}
              table={org.tableCount.toString()}
              onClick={() => handleClick(org.id)}
            />
          ))}
        </div>

        <div className="flex justify-center my-10">{pagination()}</div>
      </div>
    </>
  )
}
