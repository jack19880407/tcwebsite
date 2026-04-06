import React from 'react'

type Service = {
  title: string
  icon: string
  description: string
}

const services: Service[] = [
  { title: 'AAC辅助沟通系统训练', icon: '🗣️', description: '帮助孩子通过符号与图像进行基本沟通，与家人建立表达渠道。' },
  { title: '语言康复训练', icon: '🗨️', description: '系统性语言能力提升，促进词汇与句法发展。' },
  { title: '社交技能培训', icon: '🤝', description: '通过情景演练提高社交互动与情感表达能力。' },
  { title: '家长指导', icon: '👪', description: '提供家庭日常干预策略与教育资源。' },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">我们的服务</h2>
        <p className="text-slate-700 mb-8">以下是我们为儿童提供的核心干预方向与项目。</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-200 text-center">
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="font-semibold mb-2">{s.title}</div>
              <div className="text-sm text-slate-600">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
