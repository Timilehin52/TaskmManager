import { useState } from 'react'
import { useTasks } from '../Context/Taskcontext'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const tagStyle = {
  urgent:    'text-red-500 bg-red-50',
  important: 'text-violet-600 bg-[#974FD0]',
  normal:    'text-emerald-600 bg-emerald-50',
}

export default function MyTasks() {
  const { tasks, editTask, deleteTask, loading, error } = useTasks()
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})
  const [saving, setSaving] = useState(false)

  const startEdit = (task) => {
    setEditingId(task._id)
    setEditForm({ title: task.title, description: task.description, tag: task.tag })
  }

  const saveEdit = async (id) => {
    if (!editForm.title.trim()) return
    setSaving(true)
    try {
      await editTask(id, editForm)
      setEditingId(null)
    } catch (e) {
      alert('Failed to update task: ' + e.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return
    try {
      await deleteTask(id)
    } catch (e) {
      alert('Failed to delete task: ' + e.message)
    }
  }

  return (
    <div className="w-full px-6 md:px-23 py-1">
      <div className='mb-12 mt-0'>
        <Header />
      </div>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <Link to="/newtask">
          <button className="flex items-center gap-1.5 text-sm font-semibold text-[#974FD0] hover:bg-violet-50 px-3 py-2 rounded-lg transition">
            Add New Task
          </button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-4">
          ⚠️ {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-sm">Loading tasks...</p>
        </div>
      )}

      {!loading && tasks.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-sm">No tasks yet. Add your first one!</p>
        </div>
      )}

      {tasks.map(task => (
        <div key={task._id} className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
          {editingId === task._id ? (
            <div className="flex flex-col gap-3">
              <input
                value={editForm.title}
                onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#974FD0] transition"
                placeholder="Task title"
              />
              <textarea
                value={editForm.description}
                onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                rows={3}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#974FD0] transition resize-none"
                placeholder="Description"
              />
              <select
                value={editForm.tag}
                onChange={e => setEditForm({ ...editForm, tag: e.target.value })}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#974FD0] transition"
              >
                <option value="urgent">Urgent</option>
                <option value="important">Important</option>
                <option value="normal">Normal</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => saveEdit(task._id)}
                  disabled={saving}
                  className="px-5 py-2 bg-[#974FD0] text-white text-xs font-bold rounded-lg hover:bg-[#974FD0] transition disabled:opacity-50"
                >
                  {saving ? 'Saving…' : 'Save'}
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="px-5 py-2 bg-gray-100 text-gray-500 text-xs font-bold rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${tagStyle[task.tag] || tagStyle.normal}`}>
                  {task.tag}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(task)}
                    className="text-xs font-bold px-3 py-1.5 bg-[#974FD0] text-white rounded-lg hover:bg-[#7c18c9] transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-xs font-bold px-3 py-1.5 text-[#974FD0] border border-[#974FD0] rounded-lg hover:bg-violet-100 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <h2 className="font-bold text-gray-900 mb-1">{task.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{task.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
