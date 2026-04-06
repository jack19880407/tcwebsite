import React from 'react'

type Member = { name: string; role: string; avatar?: string }

const team: Member[] = [
  { name: '李教师', role: '中心主任', avatar: '' },
  { name: '王治疗师', role: '语言治疗师' },
  { name: '赵教育顾问', role: '家长指导顾问' },
]

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">中心团队</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-peach mx-auto mb-4" aria-label="成员头像"></div>
              <div className="font-semibold mb-1 text-slate-800">{m.name}</div>
              <div className="text-sm text-slate-600">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
