import React, { forwardRef, ReactNode } from 'react'

interface ActionCardProps {
  icon: ReactNode
  title: string
  items: { title: string; description: string }[]
}

const ActionCard = forwardRef<HTMLDivElement, ActionCardProps>(
  ({ icon, title, items }, ref) => (
    <div
      ref={ref}
      className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="bg-blue-600 px-6 py-4 flex items-center">
        {icon}
        <h3 className="text-2xl md:text-3xl font-semibold text-white ml-3">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
              <div>
                <strong className="text-blue-300">{item.title}</strong>
                <p className="text-blue-100">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
)

ActionCard.displayName = 'ActionCard'

export default ActionCard
