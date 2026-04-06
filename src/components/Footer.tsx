import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-warmWhite text-slate-600 py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm text-center">
        © {new Date().getFullYear()} 上海小螺号能力发展中心 版权所有
      </div>
    </footer>
  )
}

export default Footer
