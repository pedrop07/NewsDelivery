import { News } from './components/News'
import { useQueryNews } from '../../shared/hooks/useQueryNews'
import { Intro } from './components/Intro'
import { ErrorHandler } from '../../components/ErrorHandler'
import { NavLink } from 'react-router-dom'
import { PlusCircle } from 'phosphor-react'

export function Home() {
  const { news, isLoadingNews, isErrorNews, errorNews } = useQueryNews()

  if (isLoadingNews) {
    return (
      <>
        <Intro />
        <div
          role="status"
          className="animate-pulse grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-20"
        >
          {new Array(6).fill(7).map((_, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-5"
            >
              <div>
                <div className="flex justify-between gap-2 mb-3">
                  <div className="h-2 w-1/3 bg-gray-500 rounded-full mb-2.5"></div>
                  <div className="h-2 w-1/3 bg-gray-500 rounded-full mb-2.5"></div>
                </div>
                <div className="h-5 bg-gray-500 rounded-full w-56 mb-4"></div>
              </div>
              <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-500 rounded-full"></div>
            </div>
          ))}
          <span className="sr-only">Loading...</span>
        </div>
      </>
    )
  }

  if (isErrorNews) {
    return (
      <>
        <Intro />
        <ErrorHandler error={errorNews as Error} />
      </>
    )
  }

  if (news?.length === 0) {
    return (
      <>
        <Intro />
        <div className="mt-20 text-center">
          <h2 className="text-2xl mb-4">
            Nenhuma notícia foi encontrada, adicione uma agora mesmo !
          </h2>
          <NavLink to="/create-news" className="">
            <button className="flex items-center gap-2 w-fit text-white mx-auto focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              <div>Criar nova notícia</div>
              <PlusCircle size={28} />
            </button>
          </NavLink>
        </div>
      </>
    )
  }

  return (
    <>
      <Intro />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-20">
        {news?.map((news) => {
          return <News key={news.id} news={news} />
        })}
      </div>
    </>
  )
}
