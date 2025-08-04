'use client'

import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import confetti from 'canvas-confetti'

export default function ThankYouButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={`bg-blue-900 py-16 md:py-24`}>
      <div className="w-full flex justify-center my-12">
        <button
          onClick={openModal}
          className={`bg-gradient-to-r bg-blue-700 text-blue-100 px-8 py-4 rounded-full 
            text-lg font-bold shadow-lg transform transition-all duration-300 
            hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50
            flex items-center space-x-2`}
        >
          <span>Agradecer pela Apresentação</span>
          <FaHeart className="text-white animate-pulse" />
        </button>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 text-blue-100 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`bg-blue-950 max-w-lg rounded-2xl shadow-2xl p-8 transform transition-all duration-500 animate-fade-in-up`}
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center">
              <div
                className={`mx-auto bg-blue-800 rounded-full p-4 inline-flex mb-6 bg-gradient-to-r max-w-lg shadow-2xl transform transition-all duration-500 animate-fade-in-up`}
              >
                <FaHeart className={`text-3xl`} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-300">
                Muito Obrigado!
              </h2>
              <p className="text-xl text-blue-200 mb-6 leading-relaxed">
                Agradecemos sua atenção durante nossa apresentação sobre os
                biomas da Terra. Esperamos que tenha apreciado esta jornada
                educativa pelos diversos ecossistemas do nosso planeta.
              </p>
              <p className={`text-lg font-medium mb-8 `}>
                Preservar nosso planeta é responsabilidade de todos nós!
              </p>
              <button
                onClick={closeModal}
                className={`bg-gradient-to-r px-6 py-3 rounded-lg bg-blue-700 text-blue-100
                  hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50
                  focus:ring-opacity-50 text-lg shadow-lg
                  font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
