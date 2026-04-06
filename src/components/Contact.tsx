import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">联系我们</h2>
          <p className="text-slate-700 mb-4">地址：上海市浦东新区占位地址（待填充）</p>
          <p className="text-slate-700 mb-4">电话：+86 123-456-7890</p>
          <p className="text-slate-700 mb-6">邮箱：contact@example.com</p>
        </div>
        <form onSubmit={onSubmit} className="bg-warmWhite p-5 rounded-lg shadow-md" aria-labelledby="contact-title">
          <div className="mb-4">
            <label className="block text-sm mb-1">姓名</label>
            <input className="w-full border border-slate-300 rounded px-3 py-2 focus:ring-2 focus:ring-coral" placeholder="请输入姓名" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">邮箱</label>
            <input className="w-full border border-slate-300 rounded px-3 py-2 focus:ring-2 focus:ring-coral" placeholder="your@email.com" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">留言</label>
            <textarea className="w-full border border-slate-300 rounded px-3 py-2 resize-y focus:ring-2 focus:ring-coral" rows={4} placeholder="请输入留言信息"></textarea>
          </div>
          <button className="bg-coral text-white px-4 py-2 rounded shadow-md hover:bg-rose-600 transition" type="submit">提交</button>
          {sent && <p className="mt-3 text-green-600">谢谢您的联系！我们会尽快回复您。</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
