import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">关于我们</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          上海小螺号能力发展中心致力于帮助自闭症和语言发育迟缓儿童通过系统化的干预提升沟通能力与表达能力。我们采用以家庭为中心的综合治疗方案，融合 AAC辅助沟通、语言康复、社交技能训练以及家长指导，提升孩子在日常中的参与度与自信心。
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-warmWhite p-5 rounded-lg shadow-md hover:shadow-lg transition">📈 以证据为基础的干预方法</div>
          <div className="bg-warmWhite p-5 rounded-lg shadow-md hover:shadow-lg transition">🤝 家庭与专业团队的密切协作</div>
        </div>
      </div>
    </section>
  )
}

export default About
