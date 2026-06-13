
export default function FloatingLabel({ label, children }) {
  return (
    <div className="relative border border-[#222121] rounded-md px-3 pt-4 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
        {label}
      </span>
      {children}
    </div>
  )
}