import Header from '@/components/Header/Header'
import { CiSearch } from 'react-icons/ci'
import Bar from '@/components/Bar/Bar'

function ViewAll() {
  return (
    <>
      <Header />
      <div className="px-5">
        <div className="flex my-5 border-gray-100 rounded-md border-solid border-2  text-gray-400 px-3 py-1 md:py-2 gap-2">
          <CiSearch size={22} />
          <input type="text" className="focus:outline-none" placeholder="주점을 검색해주세요" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-5 mb-8 text-icon-color text-lg font-bold">주점 전체보기</div>
          <div className="flex flex-col md:flex-row md:gap-5">
            <Bar />
            <Bar />
          </div>
          <div className="flex flex-col md:flex-row md:gap-5">
            <Bar />
            <Bar />
          </div>
        </div>
      </div>
    </>
  )
}
export default ViewAll
