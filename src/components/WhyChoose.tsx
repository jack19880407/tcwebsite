import React from 'react'

const WhyChoose: React.FC = () => {
  const items = [
    '专业的儿童发展团队',
    '个性化评估与方案',
    '家庭为中心的干预模式',
    '科学可验证的进展追踪'
  ]
  return (
    <section id="why" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">为何选择我们</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it} className="bg-warmWhite p-5 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center transition">
              <div className="text-4xl mb-2">✨</div>
              <div className="font-semibold">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
