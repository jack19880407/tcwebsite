import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Decorative soft gradient blobs for premium feel */}
      <span aria-hidden className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-coral/40 to-peach/40 filter blur-3xl opacity-60" />
      <span aria-hidden className="absolute -bottom-20 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100 to-rose-100 filter blur-2xl opacity-60" />
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between md:gap-6">
        <div className="md:flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900">
            上海小螺号能力发展中心
            <br /> <span className="text-coral">帮助自闭症与语言发育迟缓儿童沟通与表达</span>
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            专业、温暖、可信赖的儿童能力发展中心，致力于 AAC、语言康复、社交技能等综合干预。
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-coral text-white px-6 py-3 rounded-lg shadow-md hover:bg-rose-600 transition">了解更多</button>
            <button className="border border-coral text-coral px-6 py-3 rounded-lg hover:bg-coral/10 transition">联系我们</button>
          </div>
        </div>
        <div className="md:flex-1 mt-6 md:mt-0 hidden md:block" aria-label="欢迎图标">
          <div className="w-full h-72 bg-gradient-to-br from-peach to-warmWhite rounded-xl shadow-md"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
