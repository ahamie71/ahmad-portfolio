import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nom" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded" rows="5"></textarea>
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  )
}
