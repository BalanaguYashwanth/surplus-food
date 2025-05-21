import { LucideProps } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  rating: number
  testimonial: string
  initials: string
}

const StarIcon = (props: LucideProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

export function TestimonialCard({ name, role, rating, testimonial, initials }: TestimonialCardProps) {
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-sm border border-green-100 h-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-xl font-bold text-green-600">{initials}</span>
        </div>
        <div>
          <h4 className="font-bold text-green-700">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} width={16} height={16} className={i < rating ? "opacity-100" : "opacity-30"} />
        ))}
      </div>
      <p className="text-gray-600">"{testimonial}"</p>
    </div>
  )
}