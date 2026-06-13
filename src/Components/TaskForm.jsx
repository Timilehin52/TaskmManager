import { useState } from 'react'
import { useTasks } from '../Context/Taskcontext'
import { useNavigate } from 'react-router-dom'
import { FaLessThan } from 'react-icons/fa6'

const Tags = ['urgent', 'important', 'normal']
const tagStyle = {
  urgent:    'text-red-500 border-red-300',
  important: 'text-violet-600 border-violet-300',
  normal:    'text-emerald-600 border-emerald-300',
}

export default function TaskForm() {
  const { addTask } = useTasks()
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', description: '', tag: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!form.title.trim()) return alert('Please enter a title')
    if (!form.description.trim()) return alert('Please enter a description')
    if (!form.tag) return alert('Please select a tag')
    setSubmitting(true)
    try {
      await addTask(form)
      navigate('/mytask')
    } catch (e) {
      alert('Failed to create task: ' + e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full mx-auto px-6 md:px-19 py-10">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate('/')}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-violet-50 hover:text-[#974FD0] transition"
        >
          <FaLessThan />
        </button>
        <h1 className="text-2xl font-bold">New Task</h1>
      </div>

      <div className="relative border-2 border-gray-200 rounded-xl px-4 pt-5 pb-3 mb-5 bg-white focus-within:border-violet-400 transition">
        <span className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-semibold text-gray-400">Task Title</span>
        <input
          type="text"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="E.g Project Defense, Assignment"
          className="w-full outline-none text-sm text-gray-800 bg-transparent"
        />
      </div>

      <div className="relative border-2 border-gray-200 rounded-xl px-4 pt-5 pb-3 mb-5 bg-white focus-within:border-[#974FD0] transition">
        <span className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-semibold text-gray-400">Description</span>
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="Briefly describe your task..."
          rows={4}
          className="w-full outline-none text-sm text-gray-800 bg-transparent resize-none"
        />
      </div>

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tags</p>
      <div className="flex gap-3 mb-8">
        {Tags.map(tag => (
          <button
            key={tag}
            onClick={() => setForm({ ...form, tag })}
            className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition capitalize ${tagStyle[tag]} ${
              form.tag === tag ? 'opacity-100 bg-white shadow-sm' : 'opacity-40 border-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full py-4 bg-[#974FD0] text-white font-bold rounded-xl hover:bg-[#974FD0] transition text-sm tracking-wide disabled:opacity-50"
      >
        {submitting ? 'Creating…' : 'Done'}
      </button>
    </div>
  )
}
