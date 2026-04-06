import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-warmWhite/90 backdrop-filter backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-coral">上海小螺号能力发展中心</span>
        </div>
        <div className="hidden md:flex space-x-6 text-slate-700">
          <a href="#home" className="hover:text-coral">首页</a>
          <a href="#about" className="hover:text-coral">关于我们</a>
          <a href="#services" className="hover:text-coral">服务</a>
          <a href="#why" className="hover:text-coral">为什么选择我们</a>
          <a href="#team" className="hover:text-coral">团队</a>
          <a href="#contact" className="hover:text-coral">联系</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
