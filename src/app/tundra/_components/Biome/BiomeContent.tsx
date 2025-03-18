import React, { forwardRef } from 'react'

interface BiomeContentProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  text: string | string[]
  list?: string[]
  sections?: { subtitle: string; text: string }[]
}

const BiomeContent = forwardRef<HTMLDivElement, BiomeContentProps>(({
  icon: Icon,
  title,
  text,
  list,
  sections
}, ref) => {
  return (
    <div ref={ref} className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1">
      <div className="bg-blue-600 p-3 rounded-lg inline-flex mb-4 hover:bg-blue-500 transition-colors duration-300">
        <Icon className="text-blue-100 text-2xl" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {Array.isArray(text) ? (
        text.map((paragraph, index) => (
          <p key={index} className="text-lg text-blue-100 leading-relaxed mb-6">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="text-lg text-blue-100 leading-relaxed mb-6">{text}</p>
      )}
      {list && (
        <ul className="space-y-3 text-blue-100">
          {list.map((item, index) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      )}
      {sections && (
        <div className="mt-6 space-y-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-2">{section.subtitle}</h4>
              <p className="text-lg text-blue-100 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
})

BiomeContent.displayName = 'BiomeContent'

export default BiomeContent
