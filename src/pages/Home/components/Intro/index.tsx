import undrawSvg from '../../../../assets/undraw_news.svg'

export function Intro() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-20 lg:mt-22 mt-14">
      <div className="lg:order-first order-last">
        <h1 className="font-extrabold text-5xl mb-4">News Delivery</h1>
        <p className="text-xl max-w-xl">
          o News Delivery mantém você conectado ao que realmente importa,
          oferecendo uma visão global dos acontecimentos mais relevantes.
        </p>
      </div>
      <img className="lg:max-w-[350px] max-w-[250px]" src={undrawSvg} alt="" />
    </div>
  )
}
