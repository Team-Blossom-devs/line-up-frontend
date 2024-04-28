import Header from '@/components/Header/Header'
import { CiSearch } from 'react-icons/ci'
import Bar from '@/components/Bar/Bar'

function ViewAll() {
  type Bars = {
    name: string
    location: string
    time: string
  }

  const data: Bars[] = [
    { name: '컴퓨터공학과 주점', location: '명진관', time: '18:00 ~ 22:00' },
    { name: '신소재공학과 주점', location: '미래관', time: '19:00 ~ 22:00' },
    { name: '화학공학과 주점', location: '명진관', time: '17:00 ~ 23:00' },
    { name: '경영학과 주점', location: '미래관', time: '17:00 ~ 22:00' },
  ]

  const barList = data.map((value) => <Bar name={value.name} location={value.location} time={value.time} />)

  return (
    <>
      <Header />
      <div className="px-5 md:px-0">
        <div className="flex my-5 border-gray-100 rounded-md border-solid border-2  text-gray-400 px-3 py-1 md:py-2 gap-2">
          <CiSearch size={22} />
          <input type="text" className="focus:outline-none" placeholder="주점을 검색해주세요" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mt-5 mb-8 text-icon-color text-lg font-bold">주점 전체보기</div>
        </div>

        {/* <div className="flex"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">{barList}</div>
        {/* </div> */}
      </div>
    </>
  )
}
export default ViewAll
