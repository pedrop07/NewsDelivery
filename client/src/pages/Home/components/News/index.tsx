import { NavLink } from 'react-router-dom'
import { NewsData } from '../../../../interfaces/News'
import { summarizeContent } from '../../../../shared/utils/summarizeContent'

interface NewsProps {
  news: NewsData
}

export function News({ news }: NewsProps) {
  const releaseDate = new Date(news.release_date).toLocaleDateString()

  return (
    <NavLink to={`/details/${news.id}`}>
      <div className="bg-slate-800 h-full hover:bg-slate-700 transition-all duration-150 cursor-pointer rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-5">
        <div>
          <div className="flex justify-between gap-2 mb-3 text-sm text-blue-400">
            <span>{news.author}</span>
            <time dateTime={news.release_date}>{releaseDate}</time>
          </div>
          <h2 className="font-bold mb-2">{news.title}</h2>
        </div>
        <p className="break-all">{summarizeContent(news.content)}</p>
      </div>
    </NavLink>
  )
}
