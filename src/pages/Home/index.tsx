import { useContext } from 'react'
import { News } from './components/News'
import { NewsContext } from '../../contexts/NewsProvider'
import undrawSvg from '../../assets/undraw_news.svg'

export function Home() {
  const { news } = useContext(NewsContext)

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-20 lg:mt-22 mt-14">
        <div className="lg:order-first order-last">
          <h1 className="font-extrabold text-5xl dark:text-slate-50 mb-4">
            News Delivery
          </h1>
          <p className="text-xl max-w-xl">
            o News Delivery mantém você conectado ao que realmente importa,
            oferecendo uma visão global dos acontecimentos mais relevantes.
          </p>
        </div>
        <img
          className="lg:max-w-[350px] max-w-[250px]"
          src={undrawSvg}
          alt=""
        />
      </div>
      {news.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-20">
          {news.map((news) => {
            return <News key={news.id} news={news} />
          })}
        </div>
      )}
    </>
  )
}
